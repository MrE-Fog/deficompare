from typing import Union

from gql import gql, Client
from gql.transport.requests import RequestsHTTPTransport

from data_sources.helpers import print_red

uniswap_client = Client(
    transport=RequestsHTTPTransport(
        url="https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2"))


def get_uniswap_tvl() -> Union[None, float]:
    try:
        query = gql(
            """{
                uniswapFactories(first: 1) {
                    totalLiquidityUSD
                }
            }"""
        )
        result = uniswap_client.execute(query)
        return float(result['uniswapFactories'][0]['totalLiquidityUSD'])
    except Exception as e:
        print_red("Unsucessful call in graphcalls.get_uniswap_tvl()")
        print(e)
        return None


def get_uniswap_daily_pools(date: int) -> Union[None, list]:
    """date: unix timestamp"""
    result: list
    try:
        # first request to get first id
        query = gql(
            """{
                pairDayDatas(first: 1, where: {date_gte: """ + str(date - 86400) +
            """, date_lt: """ + str(date) +
            """, dailyVolumeUSD_gt: 0}) {
                    id
                    dailyVolumeUSD
                    reserveUSD
                }
            }"""
        )
        result = uniswap_client.execute(query)['pairDayDatas']
        response = list(range(1000))
        while len(response) == 1000:
            query = gql(
                """{
                    pairDayDatas(first: 1000, where: {date_gte: """ + str(date - 86400) +
                """, date_lt: """ + str(date) +
                """, id_gt: \"""" + str(result[-1]['id']) +
                """\", dailyVolumeUSD_gt: 0, reserveUSD_gt: 100000}) {
                        id
                        dailyVolumeUSD
                        reserveUSD
                    }
                }"""
            )
            response = uniswap_client.execute(query)['pairDayDatas']
            result.extend(response)
        return result
    except Exception as e:
        print_red("Unsucessful call in graphcalls.get_uniswap_daily_pools()")
        print(e)
        return None


def get_uniswap_pools() -> Union[None, list]:
    result: list
    try:
        # first request to get first id
        query = gql(
            """{
                pairs(first: 1, where: {volumeUSD_gt: 10000, reserveUSD_gt: 100000}) {
                    id
                    volumeUSD
                    reserveUSD
                }
            }"""
        )
        result = uniswap_client.execute(query)['pairs']
        response = list(range(1000))
        while len(response) == 1000:
            query = gql(
                """{
                    pairs(first: 1000, where: {id_gt: \"""" + str(result[-1]['id']) +
                """\", volumeUSD_gt: 10000, reserveUSD_gt: 100000}) {
                        id
                        volumeUSD
                        reserveUSD
                    }
                }"""
            )
            response = uniswap_client.execute(query)['pairs']
            result.extend(response)
        return result
    except Exception as e:
        print_red("Unsucessful call in graphcalls.get_uniswap_pools()")
        print(e)
        return None
