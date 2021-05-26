from typing import Union

from data_providers.metrics import ChainMetricProvider
from data_sources.helpers import retrieve_json, print_red
from data_sources.coingecko import get_price


def get_eth_gas_json() -> Union[None, dict]:
    """https://docs.ethgasstation.info/gas-price"""
    try:
        return retrieve_json("https://ethgasstation.info/api/ethgasAPI.json")
    except Exception:
        print_red("Unsucessful call to https://ethgasstation.info/api/ethgasAPI.json")
        return None


class EthereumMetricProvider(ChainMetricProvider):

    def __init__(self):
        super().__init__("Ethereum", "ETH")
        self.refresh()

    def refresh(self):
        try:
            eth_gas_json = get_eth_gas_json()
            self.coin_price = get_price('ethereum')
            self.avg_tx_gas = 21000
            if eth_gas_json is not None:
                self.avg_gas_price = eth_gas_json["average"] / 1e10
                self.avg_tx_time = eth_gas_json["avgWait"]*60
                self.last_block_time = eth_gas_json["block_time"]
                if self.coin_price is not None:
                    self.avg_tx_price = self.coin_price * self.avg_gas_price * self.avg_tx_gas

        except Exception as e:
            print(e)

