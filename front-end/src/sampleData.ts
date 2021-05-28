export type TokenMetricDB = {
    id: number;
    datetime: string;
    current_coin_price: number;
    avg_gas_price: number;
    avg_tx_time: number | null;
    avg_tx_price: number;
    last_block_time: number | null;
}

export type ExchangeMetric = {
    id: number;
    datetime: string;
    current_token_price: number;
    total_value_locked: number;
    min_apy: number;
    avg_apy: number;
    max_apy: number;
    swap_cost: number;
    staking_cost: number;
}
export const ethTokenMetricsSample: TokenMetricDB [] = [
    {
        "id": 7,
        "datetime": "2021-03-01 19:24:14.810366",
        "current_coin_price": 1517.67,
        "avg_gas_price": 0.000000111,
        "avg_tx_time": 84,
        "avg_tx_price": 3.53768877,
        "last_block_time": 12.791666666666666
    },
    {
        "id": 8,
        "datetime": "2021-03-01 19:24:15.466959",
        "current_coin_price": 1517.67,
        "avg_gas_price": 0.000000111,
        "avg_tx_time": 84,
        "avg_tx_price": 3.53768877,
        "last_block_time": 12.659574468085106
    },
    {
        "id": 9,
        "datetime": "2021-03-01 19:25:20.262223",
        "current_coin_price": 1517.67,
        "avg_gas_price": 0.000000111,
        "avg_tx_time": 84,
        "avg_tx_price": 3.53768877,
        "last_block_time": 12.872340425531915
    },
    {
        "id": 10,
        "datetime": "2021-03-01 19:25:22.292681",
        "current_coin_price": 1517.67,
        "avg_gas_price": 0.000000111,
        "avg_tx_time": 90,
        "avg_tx_price": 3.53768877,
        "last_block_time": 13
    },
    {
        "id": 11,
        "datetime": "2021-03-01 19:26:51.601178",
        "current_coin_price": 1517.67,
        "avg_gas_price": 0.000000111,
        "avg_tx_time": 60,
        "avg_tx_price": 3.53768877,
        "last_block_time": 11.181818181818182
    },
    {
        "id": 12,
        "datetime": "2021-03-01 19:26:53.520442",
        "current_coin_price": 1517.67,
        "avg_gas_price": 0.000000111,
        "avg_tx_time": 60,
        "avg_tx_price": 3.53768877,
        "last_block_time": 11.181818181818182
    },
    {
        "id": 13,
        "datetime": "2021-03-01 19:28:08.653244",
        "current_coin_price": 1517.67,
        "avg_gas_price": 0.000000111,
        "avg_tx_time": 60,
        "avg_tx_price": 3.53768877,
        "last_block_time": 11.209302325581396
    },
    {
        "id": 14,
        "datetime": "2021-03-01 19:28:11.624865",
        "current_coin_price": 1517.67,
        "avg_gas_price": 0.000000111,
        "avg_tx_time": 60,
        "avg_tx_price": 3.53768877,
        "last_block_time": 11.209302325581396
    },
    {
        "id": 15,
        "datetime": "2021-03-01 20:01:31.994029",
        "current_coin_price": 1528.72,
        "avg_gas_price": 0.000000095,
        "avg_tx_time": 54,
        "avg_tx_price": 3.0497964000000004,
        "last_block_time": 11.535714285714286
    },
    {
        "id": 16,
        "datetime": "2021-03-01 20:01:36.266647",
        "current_coin_price": 1528.72,
        "avg_gas_price": 0.000000095,
        "avg_tx_time": 54,
        "avg_tx_price": 3.0497964000000004,
        "last_block_time": 11.535714285714286
    },
    {
        "id": 17,
        "datetime": "2021-03-01 20:02:36.090420",
        "current_coin_price": 1528.72,
        "avg_gas_price": 0.000000095,
        "avg_tx_time": 72,
        "avg_tx_price": 3.0497964000000004,
        "last_block_time": 13.064516129032258
    },
    {
        "id": 18,
        "datetime": "2021-03-01 20:03:41.704989",
        "current_coin_price": 1530.22,
        "avg_gas_price": 0.000000094,
        "avg_tx_time": 72,
        "avg_tx_price": 3.02065428,
        "last_block_time": 10.857142857142858
    },
    {
        "id": 19,
        "datetime": "2021-03-01 20:04:46.768857",
        "current_coin_price": 1530.22,
        "avg_gas_price": 0.000000094,
        "avg_tx_time": 66,
        "avg_tx_price": 3.02065428,
        "last_block_time": 11.185185185185185
    },
    {
        "id": 20,
        "datetime": "2021-03-01 20:05:16.447790",
        "current_coin_price": 1530.22,
        "avg_gas_price": 0.000000093,
        "avg_tx_time": 66,
        "avg_tx_price": 2.9885196599999997,
        "last_block_time": 11.076923076923077
    },
    {
        "id": 21,
        "datetime": "2021-03-01 20:05:17.191279",
        "current_coin_price": 1530.22,
        "avg_gas_price": 0.000000093,
        "avg_tx_time": 66,
        "avg_tx_price": 2.9885196599999997,
        "last_block_time": 11.076923076923077
    },
    {
        "id": 22,
        "datetime": "2021-03-01 20:06:20.467696",
        "current_coin_price": 1530.22,
        "avg_gas_price": 0.000000093,
        "avg_tx_time": 72,
        "avg_tx_price": 2.9885196599999997,
        "last_block_time": 12.266666666666667
    },
    {
        "id": 23,
        "datetime": "2021-03-01 20:06:21.178609",
        "current_coin_price": 1530.22,
        "avg_gas_price": 0.000000093,
        "avg_tx_time": 60,
        "avg_tx_price": 2.9885196599999997,
        "last_block_time": 11.222222222222221
    },
    {
        "id": 24,
        "datetime": "2021-03-01 20:07:25.067333",
        "current_coin_price": 1530.22,
        "avg_gas_price": 0.000000093,
        "avg_tx_time": 72,
        "avg_tx_price": 2.9885196599999997,
        "last_block_time": 12.2
    },
    {
        "id": 25,
        "datetime": "2021-03-01 20:07:25.558031",
        "current_coin_price": 1530.22,
        "avg_gas_price": 0.000000093,
        "avg_tx_time": 60,
        "avg_tx_price": 2.9885196599999997,
        "last_block_time": 11.37037037037037
    },
    {
        "id": 26,
        "datetime": "2021-03-01 20:08:30.017131",
        "current_coin_price": 1526.81,
        "avg_gas_price": 0.000000091,
        "avg_tx_time": 54,
        "avg_tx_price": 2.91773391,
        "last_block_time": 9.666666666666666
    },
    {
        "id": 27,
        "datetime": "2021-03-01 20:08:30.443273",
        "current_coin_price": 1526.81,
        "avg_gas_price": 0.000000091,
        "avg_tx_time": 54,
        "avg_tx_price": 2.91773391,
        "last_block_time": 9.666666666666666
    },
    {
        "id": 28,
        "datetime": "2021-03-01 20:09:33.804104",
        "current_coin_price": 1526.81,
        "avg_gas_price": 0.000000091,
        "avg_tx_time": 60,
        "avg_tx_price": 2.91773391,
        "last_block_time": 10.344827586206897
    },
    {
        "id": 29,
        "datetime": "2021-03-01 20:09:34.341943",
        "current_coin_price": 1526.81,
        "avg_gas_price": 0.000000091,
        "avg_tx_time": 60,
        "avg_tx_price": 2.91773391,
        "last_block_time": 10.344827586206897
    },
    {
        "id": 30,
        "datetime": "2021-03-01 20:10:37.786187",
        "current_coin_price": 1526.81,
        "avg_gas_price": 0.000000089,
        "avg_tx_time": 180,
        "avg_tx_price": 2.85360789,
        "last_block_time": 9.464285714285714
    },
    {
        "id": 31,
        "datetime": "2021-03-01 20:10:38.237921",
        "current_coin_price": 1526.81,
        "avg_gas_price": 0.000000089,
        "avg_tx_time": 180,
        "avg_tx_price": 2.85360789,
        "last_block_time": 9.464285714285714
    },
    {
        "id": 32,
        "datetime": "2021-03-01 20:11:41.996307",
        "current_coin_price": 1526.81,
        "avg_gas_price": 0.000000089,
        "avg_tx_time": 66,
        "avg_tx_price": 2.85360789,
        "last_block_time": 10.866666666666667
    },
    {
        "id": 33,
        "datetime": "2021-03-01 20:11:41.996290",
        "current_coin_price": 1526.81,
        "avg_gas_price": 0.000000089,
        "avg_tx_time": 60,
        "avg_tx_price": 2.85360789,
        "last_block_time": 10.866666666666667
    },
    {
        "id": 34,
        "datetime": "2021-03-01 20:11:58.913986",
        "current_coin_price": 1526.81,
        "avg_gas_price": 0.000000089,
        "avg_tx_time": 60,
        "avg_tx_price": 2.85360789,
        "last_block_time": 10.866666666666667
    },
    {
        "id": 35,
        "datetime": "2021-03-01 20:12:02.195382",
        "current_coin_price": 1526.81,
        "avg_gas_price": 0.000000089,
        "avg_tx_time": 60,
        "avg_tx_price": 2.85360789,
        "last_block_time": 10.866666666666667
    },
    {
        "id": 36,
        "datetime": "2021-03-01 23:04:40.672799",
        "current_coin_price": 1525.29,
        "avg_gas_price": 0.000000111,
        "avg_tx_time": 120,
        "avg_tx_price": 3.5554509899999998,
        "last_block_time": 15.934426229508198
    },
    {
        "id": 37,
        "datetime": "2021-03-01 23:04:50.722138",
        "current_coin_price": 1525.29,
        "avg_gas_price": 0.000000111,
        "avg_tx_time": 120,
        "avg_tx_price": 3.5554509899999998,
        "last_block_time": 15.934426229508198
    },
    {
        "id": 38,
        "datetime": "2021-03-01 23:33:02.818761",
        "current_coin_price": 1528.78,
        "avg_gas_price": 0.00000009,
        "avg_tx_time": 72,
        "avg_tx_price": 2.8893942,
        "last_block_time": 10.606060606060606
    },
    {
        "id": 39,
        "datetime": "2021-03-01 23:34:02.050044",
        "current_coin_price": 1534.84,
        "avg_gas_price": 0.00000009,
        "avg_tx_time": 54,
        "avg_tx_price": 2.9008475999999996,
        "last_block_time": 9.06060606060606
    },
    {
        "id": 40,
        "datetime": "2021-03-01 23:35:02.686335",
        "current_coin_price": 1534.84,
        "avg_gas_price": 0.00000009,
        "avg_tx_time": 60,
        "avg_tx_price": 2.9008475999999996,
        "last_block_time": 9.774193548387096
    },
    {
        "id": 41,
        "datetime": "2021-03-01 23:36:02.458680",
        "current_coin_price": 1534.84,
        "avg_gas_price": 0.000000088,
        "avg_tx_time": 66,
        "avg_tx_price": 2.8363843199999996,
        "last_block_time": 9.18918918918919
    },
    {
        "id": 42,
        "datetime": "2021-03-01 23:37:02.834145",
        "current_coin_price": 1534.84,
        "avg_gas_price": 0.000000088,
        "avg_tx_time": 66,
        "avg_tx_price": 2.8363843199999996,
        "last_block_time": 10.051282051282051
    },
    {
        "id": 43,
        "datetime": "2021-03-01 23:38:04.283036",
        "current_coin_price": 1534.84,
        "avg_gas_price": 0.000000088,
        "avg_tx_time": 78,
        "avg_tx_price": 2.8363843199999996,
        "last_block_time": 11.27027027027027
    },
    {
        "id": 44,
        "datetime": "2021-03-01 23:39:05.734157",
        "current_coin_price": 1534.84,
        "avg_gas_price": 0.000000088,
        "avg_tx_time": 78,
        "avg_tx_price": 2.8363843199999996,
        "last_block_time": 11.27027027027027
    },
    {
        "id": 45,
        "datetime": "2021-03-01 23:40:02.856157",
        "current_coin_price": 1534.84,
        "avg_gas_price": 0.000000088,
        "avg_tx_time": 72,
        "avg_tx_price": 2.8363843199999996,
        "last_block_time": 11.27027027027027
    },
    {
        "id": 46,
        "datetime": "2021-03-01 23:41:19.113107",
        "current_coin_price": 1541.99,
        "avg_gas_price": 0.000000088,
        "avg_tx_time": 66,
        "avg_tx_price": 2.84959752,
        "last_block_time": 10.384615384615385
    },
    {
        "id": 47,
        "datetime": "2021-03-01 23:42:02.619493",
        "current_coin_price": 1541.99,
        "avg_gas_price": 0.000000088,
        "avg_tx_time": 72,
        "avg_tx_price": 2.84959752,
        "last_block_time": 11.64864864864865
    },
    {
        "id": 48,
        "datetime": "2021-03-01 23:43:08.317731",
        "current_coin_price": 1541.99,
        "avg_gas_price": 0.000000088,
        "avg_tx_time": 66,
        "avg_tx_price": 2.84959752,
        "last_block_time": 10.282051282051283
    },
    {
        "id": 49,
        "datetime": "2021-03-01 23:44:02.668538",
        "current_coin_price": 1541.99,
        "avg_gas_price": 0.000000088,
        "avg_tx_time": 72,
        "avg_tx_price": 2.84959752,
        "last_block_time": 11.277777777777779
    },
    {
        "id": 50,
        "datetime": "2021-03-01 23:44:50.097314",
        "current_coin_price": 1541.99,
        "avg_gas_price": 0.000000088,
        "avg_tx_time": 72,
        "avg_tx_price": 2.84959752,
        "last_block_time": 11.277777777777779
    },
    {
        "id": 51,
        "datetime": "2021-03-01 23:45:09.266422",
        "current_coin_price": 1541.99,
        "avg_gas_price": 0.000000088,
        "avg_tx_time": 60,
        "avg_tx_price": 2.84959752,
        "last_block_time": 10.282051282051283
    },
    {
        "id": 52,
        "datetime": "2021-03-01 23:45:33.456047",
        "current_coin_price": 1538.25,
        "avg_gas_price": 0.000000088,
        "avg_tx_time": 72,
        "avg_tx_price": 2.8426859999999996,
        "last_block_time": 10.375
    },
    {
        "id": 53,
        "datetime": "2021-03-01 23:45:50.555714",
        "current_coin_price": 1538.25,
        "avg_gas_price": 0.000000088,
        "avg_tx_time": 72,
        "avg_tx_price": 2.8426859999999996,
        "last_block_time": 11.35135135135135
    },
    {
        "id": 54,
        "datetime": "2021-03-01 23:46:09.395231",
        "current_coin_price": 1538.25,
        "avg_gas_price": 0.000000088,
        "avg_tx_time": 60,
        "avg_tx_price": 2.8426859999999996,
        "last_block_time": 10.282051282051283
    },
    {
        "id": 55,
        "datetime": "2021-03-01 23:46:30.304521",
        "current_coin_price": 1538.25,
        "avg_gas_price": 0.000000088,
        "avg_tx_time": 78,
        "avg_tx_price": 2.8426859999999996,
        "last_block_time": 11.105263157894736
    },
    {
        "id": 56,
        "datetime": "2021-03-01 23:46:51.163066",
        "current_coin_price": 1538.25,
        "avg_gas_price": 0.000000088,
        "avg_tx_time": 72,
        "avg_tx_price": 2.8426859999999996,
        "last_block_time": 11.222222222222221
    },
    {
        "id": 57,
        "datetime": "2021-03-01 23:47:10.001136",
        "current_coin_price": 1538.25,
        "avg_gas_price": 0.000000088,
        "avg_tx_time": 186,
        "avg_tx_price": 2.8426859999999996,
        "last_block_time": 11.222222222222221
    },
    {
        "id": 58,
        "datetime": "2021-03-01 23:47:30.112743",
        "current_coin_price": 1538.25,
        "avg_gas_price": 0.000000088,
        "avg_tx_time": 150,
        "avg_tx_price": 2.8426859999999996,
        "last_block_time": 10.131578947368421
    },
    {
        "id": 59,
        "datetime": "2021-03-01 23:47:50.064438",
        "current_coin_price": 1538.25,
        "avg_gas_price": 0.000000088,
        "avg_tx_time": 186,
        "avg_tx_price": 2.8426859999999996,
        "last_block_time": 11.222222222222221
    },
    {
        "id": 60,
        "datetime": "2021-03-01 23:48:11.143733",
        "current_coin_price": 1538.25,
        "avg_gas_price": 0.000000088,
        "avg_tx_time": 60,
        "avg_tx_price": 2.8426859999999996,
        "last_block_time": 10.131578947368421
    },
    {
        "id": 61,
        "datetime": "2021-03-01 23:48:29.453485",
        "current_coin_price": 1538.25,
        "avg_gas_price": 0.000000088,
        "avg_tx_time": 78,
        "avg_tx_price": 2.8426859999999996,
        "last_block_time": 11.38888888888889
    },
    {
        "id": 62,
        "datetime": "2021-03-01 23:48:49.491424",
        "current_coin_price": 1538.25,
        "avg_gas_price": 0.000000088,
        "avg_tx_time": 78,
        "avg_tx_price": 2.8426859999999996,
        "last_block_time": 11.38888888888889
    },
    {
        "id": 63,
        "datetime": "2021-03-01 23:49:10.267850",
        "current_coin_price": 1538.25,
        "avg_gas_price": 0.000000088,
        "avg_tx_time": 72,
        "avg_tx_price": 2.8426859999999996,
        "last_block_time": 11.323529411764707
    },
    {
        "id": 64,
        "datetime": "2021-03-01 23:49:29.620974",
        "current_coin_price": 1538.29,
        "avg_gas_price": 0.000000088,
        "avg_tx_time": 66,
        "avg_tx_price": 2.8427599199999998,
        "last_block_time": 10.305555555555555
    },
    {
        "id": 65,
        "datetime": "2021-03-01 23:49:50.482544",
        "current_coin_price": 1538.29,
        "avg_gas_price": 0.000000088,
        "avg_tx_time": 78,
        "avg_tx_price": 2.8427599199999998,
        "last_block_time": 11.470588235294118
    },
    {
        "id": 66,
        "datetime": "2021-03-01 23:50:09.986902",
        "current_coin_price": 1538.29,
        "avg_gas_price": 0.000000088,
        "avg_tx_time": 174,
        "avg_tx_price": 2.8427599199999998,
        "last_block_time": 10.305555555555555
    },
    {
        "id": 67,
        "datetime": "2021-03-01 23:50:29.339161",
        "current_coin_price": 1538.29,
        "avg_gas_price": 0.000000088,
        "avg_tx_time": 72,
        "avg_tx_price": 2.8427599199999998,
        "last_block_time": 11.470588235294118
    },
    {
        "id": 68,
        "datetime": "2021-03-01 23:50:50.580187",
        "current_coin_price": 1538.29,
        "avg_gas_price": 0.000000088,
        "avg_tx_time": 72,
        "avg_tx_price": 2.8427599199999998,
        "last_block_time": 11.558823529411764
    },
    {
        "id": 69,
        "datetime": "2021-03-01 23:51:10.324855",
        "current_coin_price": 1538.29,
        "avg_gas_price": 0.000000088,
        "avg_tx_time": 66,
        "avg_tx_price": 2.8427599199999998,
        "last_block_time": 10.38888888888889
    },
    {
        "id": 70,
        "datetime": "2021-03-01 23:51:30.718817",
        "current_coin_price": 1538.29,
        "avg_gas_price": 0.000000088,
        "avg_tx_time": 78,
        "avg_tx_price": 2.8427599199999998,
        "last_block_time": 11.558823529411764
    },
    {
        "id": 71,
        "datetime": "2021-03-01 23:51:49.832122",
        "current_coin_price": 1538.29,
        "avg_gas_price": 0.000000088,
        "avg_tx_time": 78,
        "avg_tx_price": 2.8427599199999998,
        "last_block_time": 11.558823529411764
    },
    {
        "id": 72,
        "datetime": "2021-03-01 23:52:09.990271",
        "current_coin_price": 1538.29,
        "avg_gas_price": 0.000000088,
        "avg_tx_time": 66,
        "avg_tx_price": 2.8427599199999998,
        "last_block_time": 10.38888888888889
    },
    {
        "id": 73,
        "datetime": "2021-03-01 23:52:29.751426",
        "current_coin_price": 1538.29,
        "avg_gas_price": 0.000000088,
        "avg_tx_time": 72,
        "avg_tx_price": 2.8427599199999998,
        "last_block_time": 10.38888888888889
    },
    {
        "id": 74,
        "datetime": "2021-03-01 23:52:50.359061",
        "current_coin_price": 1538.29,
        "avg_gas_price": 0.000000088,
        "avg_tx_time": 78,
        "avg_tx_price": 2.8427599199999998,
        "last_block_time": 11.363636363636363
    },
    {
        "id": 75,
        "datetime": "2021-03-01 23:53:09.930980",
        "current_coin_price": 1538.29,
        "avg_gas_price": 0.000000088,
        "avg_tx_time": 72,
        "avg_tx_price": 2.8427599199999998,
        "last_block_time": 10.805555555555555
    },
    {
        "id": 76,
        "datetime": "2021-03-01 23:53:29.859521",
        "current_coin_price": 1538.29,
        "avg_gas_price": 0.000000088,
        "avg_tx_time": 90,
        "avg_tx_price": 2.8427599199999998,
        "last_block_time": 11.617647058823529
    },
    {
        "id": 77,
        "datetime": "2021-03-01 23:53:49.348526",
        "current_coin_price": 1534.9,
        "avg_gas_price": 0.000000088,
        "avg_tx_time": 84,
        "avg_tx_price": 2.8364952,
        "last_block_time": 10.805555555555555
    },
    {
        "id": 78,
        "datetime": "2021-03-01 23:54:10.356105",
        "current_coin_price": 1534.9,
        "avg_gas_price": 0.000000088,
        "avg_tx_time": 78,
        "avg_tx_price": 2.8364952,
        "last_block_time": 10.805555555555555
    },
    {
        "id": 79,
        "datetime": "2021-03-01 23:54:29.122315",
        "current_coin_price": 1534.9,
        "avg_gas_price": 0.000000088,
        "avg_tx_time": 78,
        "avg_tx_price": 2.8364952,
        "last_block_time": 10.805555555555555
    },
    {
        "id": 80,
        "datetime": "2021-03-02 00:49:52.899722",
        "current_coin_price": 1559.04,
        "avg_gas_price": 0.00000013,
        "avg_tx_time": 96,
        "avg_tx_price": 4.2561792,
        "last_block_time": 12.954545454545455
    },
    {
        "id": 81,
        "datetime": "2021-03-02 00:50:52.027879",
        "current_coin_price": 1559.04,
        "avg_gas_price": 0.000000146,
        "avg_tx_time": 72,
        "avg_tx_price": 4.78001664,
        "last_block_time": 6.666666666666667
    },
    {
        "id": 82,
        "datetime": "2021-03-02 00:51:52.028389",
        "current_coin_price": 1559.04,
        "avg_gas_price": 0.000000135,
        "avg_tx_time": 90,
        "avg_tx_price": 4.4198784,
        "last_block_time": 12.720930232558139
    },
    {
        "id": 83,
        "datetime": "2021-03-02 00:52:53.297987",
        "current_coin_price": 1559.04,
        "avg_gas_price": 0.000000135,
        "avg_tx_time": 198,
        "avg_tx_price": 4.4198784,
        "last_block_time": 12.976744186046512
    },
    {
        "id": 84,
        "datetime": "2021-03-02 00:53:52.377909",
        "current_coin_price": 1564.42,
        "avg_gas_price": 0.000000146,
        "avg_tx_time": 78,
        "avg_tx_price": 4.796511720000001,
        "last_block_time": 11.5
    },
    {
        "id": 85,
        "datetime": "2021-03-02 00:54:52.084242",
        "current_coin_price": 1564.42,
        "avg_gas_price": 0.000000146,
        "avg_tx_time": 210,
        "avg_tx_price": 4.796511720000001,
        "last_block_time": 11.5
    },
    {
        "id": 86,
        "datetime": "2021-03-02 00:55:52.554873",
        "current_coin_price": 1564.42,
        "avg_gas_price": 0.000000146,
        "avg_tx_time": 72,
        "avg_tx_price": 4.796511720000001,
        "last_block_time": 10.666666666666666
    },
    {
        "id": 87,
        "datetime": "2021-03-02 00:56:52.904971",
        "current_coin_price": 1564.42,
        "avg_gas_price": 0.000000146,
        "avg_tx_time": 72,
        "avg_tx_price": 4.796511720000001,
        "last_block_time": 10.666666666666666
    },
    {
        "id": 88,
        "datetime": "2021-03-06 00:22:40.217472",
        "current_coin_price": 1504.76,
        "avg_gas_price": 0.000000119,
        "avg_tx_time": 84,
        "avg_tx_price": 3.76039524,
        "last_block_time": 12.907407407407407
    },
    {
        "id": 89,
        "datetime": "2021-03-06 00:22:52.920342",
        "current_coin_price": 1504.76,
        "avg_gas_price": 0.000000119,
        "avg_tx_time": 90,
        "avg_tx_price": 3.76039524,
        "last_block_time": 13.185185185185185
    },
    {
        "id": 90,
        "datetime": "2021-03-06 00:23:02.550436",
        "current_coin_price": 1504.76,
        "avg_gas_price": 0.000000119,
        "avg_tx_time": 90,
        "avg_tx_price": 3.76039524,
        "last_block_time": 13.185185185185185
    },
    {
        "id": 91,
        "datetime": "2021-03-06 00:23:13.103285",
        "current_coin_price": 1504.76,
        "avg_gas_price": 0.000000119,
        "avg_tx_time": 90,
        "avg_tx_price": 3.76039524,
        "last_block_time": 13.185185185185185
    },
    {
        "id": 92,
        "datetime": "2021-03-06 00:24:39.629196",
        "current_coin_price": 1502.65,
        "avg_gas_price": 0.000000119,
        "avg_tx_time": 90,
        "avg_tx_price": 3.75512235,
        "last_block_time": 13.218181818181819
    },
    {
        "id": 93,
        "datetime": "2021-03-06 00:24:49.599251",
        "current_coin_price": 1502.65,
        "avg_gas_price": 0.000000119,
        "avg_tx_time": 90,
        "avg_tx_price": 3.75512235,
        "last_block_time": 13.218181818181819
    }
]

export const solTokenMetricsSample: TokenMetricDB [] = [
    {
        "id": 7,
        "datetime": "2021-03-01 19:24:14.172131",
        "current_coin_price": 14.51,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": null,
        "avg_tx_price": 0.00007283638157894737,
        "last_block_time": null
    },
    {
        "id": 8,
        "datetime": "2021-03-01 19:24:14.279369",
        "current_coin_price": 14.51,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": null,
        "avg_tx_price": 0.00007283638157894737,
        "last_block_time": null
    },
    {
        "id": 9,
        "datetime": "2021-03-01 19:25:19.482714",
        "current_coin_price": 14.51,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": null,
        "avg_tx_price": 0.00007283638157894737,
        "last_block_time": null
    },
    {
        "id": 10,
        "datetime": "2021-03-01 19:25:21.064360",
        "current_coin_price": 14.51,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": null,
        "avg_tx_price": 0.00007283638157894737,
        "last_block_time": null
    },
    {
        "id": 11,
        "datetime": "2021-03-01 19:26:50.824597",
        "current_coin_price": 14.51,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": null,
        "avg_tx_price": 0.00007283638157894737,
        "last_block_time": null
    },
    {
        "id": 12,
        "datetime": "2021-03-01 19:26:52.410183",
        "current_coin_price": 14.51,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": null,
        "avg_tx_price": 0.00007283638157894737,
        "last_block_time": null
    },
    {
        "id": 13,
        "datetime": "2021-03-01 19:28:07.930929",
        "current_coin_price": 14.51,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": null,
        "avg_tx_price": 0.00007283638157894737,
        "last_block_time": null
    },
    {
        "id": 14,
        "datetime": "2021-03-01 19:28:10.311724",
        "current_coin_price": 14.51,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": null,
        "avg_tx_price": 0.00007283638157894737,
        "last_block_time": null
    },
    {
        "id": 15,
        "datetime": "2021-03-01 20:01:31.339533",
        "current_coin_price": 14.97,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": 0.52,
        "avg_tx_price": 0.0000751454605263158,
        "last_block_time": 0.52
    },
    {
        "id": 16,
        "datetime": "2021-03-01 20:01:35.064327",
        "current_coin_price": 14.97,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": 0.52,
        "avg_tx_price": 0.0000751454605263158,
        "last_block_time": 0.52
    },
    {
        "id": 17,
        "datetime": "2021-03-01 20:02:34.883940",
        "current_coin_price": 14.97,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": 0.52,
        "avg_tx_price": 0.0000751454605263158,
        "last_block_time": 0.52
    },
    {
        "id": 18,
        "datetime": "2021-03-01 20:03:40.250565",
        "current_coin_price": 14.99,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": 0.52,
        "avg_tx_price": 0.0000752458552631579,
        "last_block_time": 0.52
    },
    {
        "id": 19,
        "datetime": "2021-03-01 20:04:45.890738",
        "current_coin_price": 14.99,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": 0.52,
        "avg_tx_price": 0.0000752458552631579,
        "last_block_time": 0.52
    },
    {
        "id": 20,
        "datetime": "2021-03-01 20:05:15.142810",
        "current_coin_price": 14.99,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": 0.52,
        "avg_tx_price": 0.0000752458552631579,
        "last_block_time": 0.52
    },
    {
        "id": 21,
        "datetime": "2021-03-01 20:05:16.448112",
        "current_coin_price": 14.99,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": 0.52,
        "avg_tx_price": 0.0000752458552631579,
        "last_block_time": 0.52
    },
    {
        "id": 22,
        "datetime": "2021-03-01 20:06:19.277211",
        "current_coin_price": 14.99,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": 0.52,
        "avg_tx_price": 0.0000752458552631579,
        "last_block_time": 0.52
    },
    {
        "id": 23,
        "datetime": "2021-03-01 20:06:19.977908",
        "current_coin_price": 14.99,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": 0.52,
        "avg_tx_price": 0.0000752458552631579,
        "last_block_time": 0.52
    },
    {
        "id": 24,
        "datetime": "2021-03-01 20:07:23.881738",
        "current_coin_price": 14.99,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": 0.52,
        "avg_tx_price": 0.0000752458552631579,
        "last_block_time": 0.52
    },
    {
        "id": 25,
        "datetime": "2021-03-01 20:07:24.330807",
        "current_coin_price": 14.99,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": 0.52,
        "avg_tx_price": 0.0000752458552631579,
        "last_block_time": 0.52
    },
    {
        "id": 26,
        "datetime": "2021-03-01 20:08:28.657748",
        "current_coin_price": 14.99,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": 0.52,
        "avg_tx_price": 0.0000752458552631579,
        "last_block_time": 0.52
    },
    {
        "id": 27,
        "datetime": "2021-03-01 20:08:29.215926",
        "current_coin_price": 14.99,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": 0.52,
        "avg_tx_price": 0.0000752458552631579,
        "last_block_time": 0.52
    },
    {
        "id": 28,
        "datetime": "2021-03-01 20:09:33.028470",
        "current_coin_price": 14.96,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": 0.52,
        "avg_tx_price": 0.00007509526315789475,
        "last_block_time": 0.52
    },
    {
        "id": 29,
        "datetime": "2021-03-01 20:09:33.028436",
        "current_coin_price": 14.99,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": 0.52,
        "avg_tx_price": 0.0000752458552631579,
        "last_block_time": 0.52
    },
    {
        "id": 31,
        "datetime": "2021-03-01 20:10:36.925726",
        "current_coin_price": 14.96,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": 0.52,
        "avg_tx_price": 0.00007509526315789475,
        "last_block_time": 0.52
    },
    {
        "id": 30,
        "datetime": "2021-03-01 20:10:36.925726",
        "current_coin_price": 14.96,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": 0.52,
        "avg_tx_price": 0.00007509526315789475,
        "last_block_time": 0.52
    },
    {
        "id": 32,
        "datetime": "2021-03-01 20:11:40.740107",
        "current_coin_price": 14.96,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": 0.52,
        "avg_tx_price": 0.00007509526315789475,
        "last_block_time": 0.52
    },
    {
        "id": 33,
        "datetime": "2021-03-01 20:11:40.848511",
        "current_coin_price": 14.96,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": 0.52,
        "avg_tx_price": 0.00007509526315789475,
        "last_block_time": 0.52
    },
    {
        "id": 34,
        "datetime": "2021-03-01 20:11:58.246338",
        "current_coin_price": 14.96,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": 0.52,
        "avg_tx_price": 0.00007509526315789475,
        "last_block_time": 0.52
    },
    {
        "id": 35,
        "datetime": "2021-03-01 20:12:01.005716",
        "current_coin_price": 14.96,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": 0.52,
        "avg_tx_price": 0.00007509526315789475,
        "last_block_time": 0.52
    },
    {
        "id": 36,
        "datetime": "2021-03-01 23:04:38.832904",
        "current_coin_price": 14.7,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": 0.52,
        "avg_tx_price": 0.00007379013157894737,
        "last_block_time": 0.52
    },
    {
        "id": 37,
        "datetime": "2021-03-01 23:04:48.812769",
        "current_coin_price": 14.7,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": 0.52,
        "avg_tx_price": 0.00007379013157894737,
        "last_block_time": 0.52
    },
    {
        "id": 38,
        "datetime": "2021-03-01 23:33:01.429285",
        "current_coin_price": 14.8,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": 0.52,
        "avg_tx_price": 0.0000742921052631579,
        "last_block_time": 0.52
    },
    {
        "id": 39,
        "datetime": "2021-03-01 23:34:01.124772",
        "current_coin_price": 14.8,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": 0.52,
        "avg_tx_price": 0.0000742921052631579,
        "last_block_time": 0.52
    },
    {
        "id": 40,
        "datetime": "2021-03-01 23:35:01.372560",
        "current_coin_price": 14.85,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": 0.52,
        "avg_tx_price": 0.00007454309210526316,
        "last_block_time": 0.52
    },
    {
        "id": 41,
        "datetime": "2021-03-01 23:36:01.149768",
        "current_coin_price": 14.85,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": 0.52,
        "avg_tx_price": 0.00007454309210526316,
        "last_block_time": 0.52
    },
    {
        "id": 42,
        "datetime": "2021-03-01 23:37:01.507285",
        "current_coin_price": 14.85,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": 0.52,
        "avg_tx_price": 0.00007454309210526316,
        "last_block_time": 0.52
    },
    {
        "id": 43,
        "datetime": "2021-03-01 23:38:02.631595",
        "current_coin_price": 14.85,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": 0.52,
        "avg_tx_price": 0.00007454309210526316,
        "last_block_time": 0.52
    },
    {
        "id": 44,
        "datetime": "2021-03-01 23:39:01.287518",
        "current_coin_price": 14.85,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": 0.52,
        "avg_tx_price": 0.00007454309210526316,
        "last_block_time": 0.52
    },
    {
        "id": 45,
        "datetime": "2021-03-01 23:40:01.311902",
        "current_coin_price": 14.85,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": 0.52,
        "avg_tx_price": 0.00007454309210526316,
        "last_block_time": 0.52
    },
    {
        "id": 46,
        "datetime": "2021-03-01 23:41:18.210622",
        "current_coin_price": 14.89,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": 0.52,
        "avg_tx_price": 0.00007474388157894737,
        "last_block_time": 0.52
    },
    {
        "id": 47,
        "datetime": "2021-03-01 23:42:01.318940",
        "current_coin_price": 14.89,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": 0.52,
        "avg_tx_price": 0.00007474388157894737,
        "last_block_time": 0.52
    },
    {
        "id": 48,
        "datetime": "2021-03-01 23:43:06.509534",
        "current_coin_price": 14.89,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": 0.52,
        "avg_tx_price": 0.00007474388157894737,
        "last_block_time": 0.52
    },
    {
        "id": 49,
        "datetime": "2021-03-01 23:44:01.288042",
        "current_coin_price": 14.89,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": 0.52,
        "avg_tx_price": 0.00007474388157894737,
        "last_block_time": 0.52
    },
    {
        "id": 50,
        "datetime": "2021-03-01 23:44:48.538549",
        "current_coin_price": 14.89,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": 0.52,
        "avg_tx_price": 0.00007474388157894737,
        "last_block_time": 0.52
    },
    {
        "id": 51,
        "datetime": "2021-03-01 23:45:08.426098",
        "current_coin_price": 14.89,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": 0.52,
        "avg_tx_price": 0.00007474388157894737,
        "last_block_time": 0.52
    },
    {
        "id": 52,
        "datetime": "2021-03-01 23:45:31.542468",
        "current_coin_price": 15.03,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": 0.52,
        "avg_tx_price": 0.0000754466447368421,
        "last_block_time": 0.52
    },
    {
        "id": 53,
        "datetime": "2021-03-01 23:45:48.454627",
        "current_coin_price": 15.03,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": 0.52,
        "avg_tx_price": 0.0000754466447368421,
        "last_block_time": 0.52
    },
    {
        "id": 54,
        "datetime": "2021-03-01 23:46:08.587036",
        "current_coin_price": 15.03,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": 0.52,
        "avg_tx_price": 0.0000754466447368421,
        "last_block_time": 0.52
    },
    {
        "id": 55,
        "datetime": "2021-03-01 23:46:28.576405",
        "current_coin_price": 15.03,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": 0.52,
        "avg_tx_price": 0.0000754466447368421,
        "last_block_time": 0.52
    },
    {
        "id": 56,
        "datetime": "2021-03-01 23:46:49.263470",
        "current_coin_price": 15.03,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": 0.52,
        "avg_tx_price": 0.0000754466447368421,
        "last_block_time": 0.52
    },
    {
        "id": 57,
        "datetime": "2021-03-01 23:47:08.575560",
        "current_coin_price": 15.03,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": 0.52,
        "avg_tx_price": 0.0000754466447368421,
        "last_block_time": 0.52
    },
    {
        "id": 58,
        "datetime": "2021-03-01 23:47:28.474390",
        "current_coin_price": 15.03,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": 0.52,
        "avg_tx_price": 0.0000754466447368421,
        "last_block_time": 0.52
    },
    {
        "id": 59,
        "datetime": "2021-03-01 23:47:48.502758",
        "current_coin_price": 15.03,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": 0.52,
        "avg_tx_price": 0.0000754466447368421,
        "last_block_time": 0.52
    },
    {
        "id": 60,
        "datetime": "2021-03-01 23:48:09.483958",
        "current_coin_price": 15.03,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": 0.52,
        "avg_tx_price": 0.0000754466447368421,
        "last_block_time": 0.52
    },
    {
        "id": 61,
        "datetime": "2021-03-01 23:48:28.531625",
        "current_coin_price": 15.03,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": 0.52,
        "avg_tx_price": 0.0000754466447368421,
        "last_block_time": 0.52
    },
    {
        "id": 62,
        "datetime": "2021-03-01 23:48:48.533801",
        "current_coin_price": 15.03,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": 0.52,
        "avg_tx_price": 0.0000754466447368421,
        "last_block_time": 0.52
    },
    {
        "id": 63,
        "datetime": "2021-03-01 23:49:08.443367",
        "current_coin_price": 15.03,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": 0.52,
        "avg_tx_price": 0.0000754466447368421,
        "last_block_time": 0.52
    },
    {
        "id": 64,
        "datetime": "2021-03-01 23:49:28.571635",
        "current_coin_price": 15.07,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": 0.52,
        "avg_tx_price": 0.00007564743421052633,
        "last_block_time": 0.52
    },
    {
        "id": 65,
        "datetime": "2021-03-01 23:49:48.560608",
        "current_coin_price": 15.07,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": 0.52,
        "avg_tx_price": 0.00007564743421052633,
        "last_block_time": 0.52
    },
    {
        "id": 66,
        "datetime": "2021-03-01 23:50:08.552024",
        "current_coin_price": 15.07,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": 0.52,
        "avg_tx_price": 0.00007564743421052633,
        "last_block_time": 0.52
    },
    {
        "id": 67,
        "datetime": "2021-03-01 23:50:28.460817",
        "current_coin_price": 15.07,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": 0.52,
        "avg_tx_price": 0.00007564743421052633,
        "last_block_time": 0.52
    },
    {
        "id": 68,
        "datetime": "2021-03-01 23:50:48.570059",
        "current_coin_price": 15.07,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": 0.52,
        "avg_tx_price": 0.00007564743421052633,
        "last_block_time": 0.52
    },
    {
        "id": 69,
        "datetime": "2021-03-01 23:51:08.461561",
        "current_coin_price": 15.07,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": 0.52,
        "avg_tx_price": 0.00007564743421052633,
        "last_block_time": 0.52
    },
    {
        "id": 70,
        "datetime": "2021-03-01 23:51:28.811415",
        "current_coin_price": 15.07,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": 0.52,
        "avg_tx_price": 0.00007564743421052633,
        "last_block_time": 0.52
    },
    {
        "id": 71,
        "datetime": "2021-03-01 23:51:48.552127",
        "current_coin_price": 15.07,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": 0.52,
        "avg_tx_price": 0.00007564743421052633,
        "last_block_time": 0.52
    },
    {
        "id": 72,
        "datetime": "2021-03-01 23:52:08.371556",
        "current_coin_price": 15.07,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": 0.52,
        "avg_tx_price": 0.00007564743421052633,
        "last_block_time": 0.52
    },
    {
        "id": 73,
        "datetime": "2021-03-01 23:52:28.497996",
        "current_coin_price": 15.07,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": 0.52,
        "avg_tx_price": 0.00007564743421052633,
        "last_block_time": 0.52
    },
    {
        "id": 74,
        "datetime": "2021-03-01 23:52:48.616648",
        "current_coin_price": 15.15,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": 0.52,
        "avg_tx_price": 0.00007604901315789474,
        "last_block_time": 0.52
    },
    {
        "id": 75,
        "datetime": "2021-03-01 23:53:08.506450",
        "current_coin_price": 15.15,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": 0.52,
        "avg_tx_price": 0.00007604901315789474,
        "last_block_time": 0.52
    },
    {
        "id": 76,
        "datetime": "2021-03-01 23:53:28.471767",
        "current_coin_price": 15.15,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": 0.52,
        "avg_tx_price": 0.00007604901315789474,
        "last_block_time": 0.52
    },
    {
        "id": 77,
        "datetime": "2021-03-01 23:53:48.587395",
        "current_coin_price": 15.15,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": 0.52,
        "avg_tx_price": 0.00007604901315789474,
        "last_block_time": 0.52
    },
    {
        "id": 78,
        "datetime": "2021-03-01 23:54:08.786990",
        "current_coin_price": 15.15,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": 0.52,
        "avg_tx_price": 0.00007604901315789474,
        "last_block_time": 0.52
    },
    {
        "id": 79,
        "datetime": "2021-03-01 23:54:28.438981",
        "current_coin_price": 15.15,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": 0.52,
        "avg_tx_price": 0.00007604901315789474,
        "last_block_time": 0.52
    },
    {
        "id": 80,
        "datetime": "2021-03-02 00:49:51.395948",
        "current_coin_price": 15.54,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": 0.52,
        "avg_tx_price": 0.00007800671052631579,
        "last_block_time": 0.52
    },
    {
        "id": 81,
        "datetime": "2021-03-02 00:50:51.171378",
        "current_coin_price": 15.54,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": 0.52,
        "avg_tx_price": 0.00007800671052631579,
        "last_block_time": 0.52
    },
    {
        "id": 82,
        "datetime": "2021-03-02 00:51:51.152487",
        "current_coin_price": 15.54,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": 0.52,
        "avg_tx_price": 0.00007800671052631579,
        "last_block_time": 0.52
    },
    {
        "id": 83,
        "datetime": "2021-03-02 00:52:52.376682",
        "current_coin_price": 15.54,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": 0.52,
        "avg_tx_price": 0.00007800671052631579,
        "last_block_time": 0.52
    },
    {
        "id": 84,
        "datetime": "2021-03-02 00:53:51.217024",
        "current_coin_price": 15.54,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": 0.52,
        "avg_tx_price": 0.00007800671052631579,
        "last_block_time": 0.52
    },
    {
        "id": 85,
        "datetime": "2021-03-02 00:54:51.306164",
        "current_coin_price": 15.51,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": 0.52,
        "avg_tx_price": 0.00007785611842105264,
        "last_block_time": 0.52
    },
    {
        "id": 86,
        "datetime": "2021-03-02 00:55:51.257562",
        "current_coin_price": 15.51,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": 0.52,
        "avg_tx_price": 0.00007785611842105264,
        "last_block_time": 0.52
    },
    {
        "id": 87,
        "datetime": "2021-03-02 00:56:51.593574",
        "current_coin_price": 15.51,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": 0.52,
        "avg_tx_price": 0.00007785611842105264,
        "last_block_time": 0.52
    },
    {
        "id": 88,
        "datetime": "2021-03-06 00:22:32.564339",
        "current_coin_price": 12.93,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": 0.52,
        "avg_tx_price": 0.00006490519736842106,
        "last_block_time": 0.52
    },
    {
        "id": 89,
        "datetime": "2021-03-06 00:22:51.672800",
        "current_coin_price": 12.93,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": 0.52,
        "avg_tx_price": 0.00006490519736842106,
        "last_block_time": 0.52
    },
    {
        "id": 90,
        "datetime": "2021-03-06 00:23:01.591874",
        "current_coin_price": 12.93,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": 0.52,
        "avg_tx_price": 0.00006490519736842106,
        "last_block_time": 0.52
    },
    {
        "id": 91,
        "datetime": "2021-03-06 00:23:11.641948",
        "current_coin_price": 12.93,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": 0.52,
        "avg_tx_price": 0.00006490519736842106,
        "last_block_time": 0.52
    },
    {
        "id": 92,
        "datetime": "2021-03-06 00:24:38.181751",
        "current_coin_price": 12.93,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": 0.52,
        "avg_tx_price": 0.00006490519736842106,
        "last_block_time": 0.52
    },
    {
        "id": 93,
        "datetime": "2021-03-06 00:24:48.219089",
        "current_coin_price": 12.93,
        "avg_gas_price": 0.000000001,
        "avg_tx_time": 0.52,
        "avg_tx_price": 0.00006490519736842106,
        "last_block_time": 0.52
    }
]

export const srmExchangeMetricsSample: ExchangeMetric [] = [
    {
        "id": 7,
        "datetime": "2021-03-01 19:24:15.899642",
        "current_token_price": 5.45,
        "total_value_locked": 22830294.49,
        "min_apy": 0.01,
        "avg_apy": 2.44,
        "max_apy": 18.1,
        "swap_cost": 0.00007288657894736842,
        "staking_cost": 0.00007288657894736842
    },
    {
        "id": 8,
        "datetime": "2021-03-01 19:24:15.925950",
        "current_token_price": 5.45,
        "total_value_locked": 22830294.49,
        "min_apy": 0.01,
        "avg_apy": 2.44,
        "max_apy": 18.1,
        "swap_cost": 0.00007288657894736842,
        "staking_cost": 0.00007288657894736842
    },
    {
        "id": 9,
        "datetime": "2021-03-01 19:25:22.204266",
        "current_token_price": 5.45,
        "total_value_locked": 22830294.49,
        "min_apy": 0.01,
        "avg_apy": 2.44,
        "max_apy": 18.1,
        "swap_cost": 0.00007288657894736842,
        "staking_cost": 0.00007288657894736842
    },
    {
        "id": 10,
        "datetime": "2021-03-01 19:25:22.675011",
        "current_token_price": 5.45,
        "total_value_locked": 22830294.49,
        "min_apy": 0.01,
        "avg_apy": 2.44,
        "max_apy": 18.1,
        "swap_cost": 0.00007288657894736842,
        "staking_cost": 0.00007288657894736842
    },
    {
        "id": 11,
        "datetime": "2021-03-01 19:26:52.003498",
        "current_token_price": 5.45,
        "total_value_locked": 22830294.49,
        "min_apy": 0.01,
        "avg_apy": 2.44,
        "max_apy": 18.1,
        "swap_cost": 0.00007283638157894737,
        "staking_cost": 0.00007283638157894737
    },
    {
        "id": 12,
        "datetime": "2021-03-01 19:26:53.905665",
        "current_token_price": 5.45,
        "total_value_locked": 22830294.49,
        "min_apy": 0.01,
        "avg_apy": 2.44,
        "max_apy": 18.1,
        "swap_cost": 0.00007283638157894737,
        "staking_cost": 0.00007283638157894737
    },
    {
        "id": 13,
        "datetime": "2021-03-01 19:28:09.133821",
        "current_token_price": 5.45,
        "total_value_locked": 22830294.49,
        "min_apy": 0.01,
        "avg_apy": 2.44,
        "max_apy": 18.1,
        "swap_cost": 0.00007283638157894737,
        "staking_cost": 0.00007283638157894737
    },
    {
        "id": 14,
        "datetime": "2021-03-01 19:28:12.036417",
        "current_token_price": 5.45,
        "total_value_locked": 22830294.49,
        "min_apy": 0.01,
        "avg_apy": 2.44,
        "max_apy": 18.1,
        "swap_cost": 0.00007283638157894737,
        "staking_cost": 0.00007283638157894737
    },
    {
        "id": 15,
        "datetime": "2021-03-01 20:01:32.377049",
        "current_token_price": 5.54,
        "total_value_locked": 22830294.49,
        "min_apy": 0.01,
        "avg_apy": 2.44,
        "max_apy": 18.1,
        "swap_cost": 0.0000751454605263158,
        "staking_cost": 0.0000751454605263158
    },
    {
        "id": 16,
        "datetime": "2021-03-01 20:01:36.791855",
        "current_token_price": 5.54,
        "total_value_locked": 22830294.49,
        "min_apy": 0.01,
        "avg_apy": 2.44,
        "max_apy": 18.1,
        "swap_cost": 0.0000751454605263158,
        "staking_cost": 0.0000751454605263158
    },
    {
        "id": 17,
        "datetime": "2021-03-01 20:02:36.813486",
        "current_token_price": 5.55,
        "total_value_locked": 22830294.49,
        "min_apy": 0.01,
        "avg_apy": 2.44,
        "max_apy": 18.1,
        "swap_cost": 0.0000751454605263158,
        "staking_cost": 0.0000751454605263158
    },
    {
        "id": 18,
        "datetime": "2021-03-01 20:03:42.208632",
        "current_token_price": 5.55,
        "total_value_locked": 22830294.49,
        "min_apy": 0.01,
        "avg_apy": 2.44,
        "max_apy": 18.1,
        "swap_cost": 0.0000751454605263158,
        "staking_cost": 0.0000751454605263158
    },
    {
        "id": 19,
        "datetime": "2021-03-01 20:04:47.956755",
        "current_token_price": 5.55,
        "total_value_locked": 22830294.49,
        "min_apy": 0.01,
        "avg_apy": 2.44,
        "max_apy": 18.1,
        "swap_cost": 0.0000751454605263158,
        "staking_cost": 0.0000751454605263158
    },
    {
        "id": 20,
        "datetime": "2021-03-01 20:05:16.768925",
        "current_token_price": 5.55,
        "total_value_locked": 22830294.49,
        "min_apy": 0.01,
        "avg_apy": 2.44,
        "max_apy": 18.1,
        "swap_cost": 0.0000752458552631579,
        "staking_cost": 0.0000752458552631579
    },
    {
        "id": 21,
        "datetime": "2021-03-01 20:05:17.649169",
        "current_token_price": 5.55,
        "total_value_locked": 22830294.49,
        "min_apy": 0.01,
        "avg_apy": 2.44,
        "max_apy": 18.1,
        "swap_cost": 0.0000752458552631579,
        "staking_cost": 0.0000752458552631579
    },
    {
        "id": 22,
        "datetime": "2021-03-01 20:06:21.014579",
        "current_token_price": 5.55,
        "total_value_locked": 22830294.49,
        "min_apy": 0.01,
        "avg_apy": 2.44,
        "max_apy": 18.1,
        "swap_cost": 0.0000752458552631579,
        "staking_cost": 0.0000752458552631579
    },
    {
        "id": 23,
        "datetime": "2021-03-01 20:06:21.562800",
        "current_token_price": 5.55,
        "total_value_locked": 22830294.49,
        "min_apy": 0.01,
        "avg_apy": 2.44,
        "max_apy": 18.1,
        "swap_cost": 0.0000752458552631579,
        "staking_cost": 0.0000752458552631579
    },
    {
        "id": 24,
        "datetime": "2021-03-01 20:07:25.824334",
        "current_token_price": 5.55,
        "total_value_locked": 22830294.49,
        "min_apy": 0.01,
        "avg_apy": 2.44,
        "max_apy": 18.1,
        "swap_cost": 0.0000752458552631579,
        "staking_cost": 0.0000752458552631579
    },
    {
        "id": 25,
        "datetime": "2021-03-01 20:07:25.978253",
        "current_token_price": 5.55,
        "total_value_locked": 22830294.49,
        "min_apy": 0.01,
        "avg_apy": 2.44,
        "max_apy": 18.1,
        "swap_cost": 0.0000752458552631579,
        "staking_cost": 0.0000752458552631579
    },
    {
        "id": 26,
        "datetime": "2021-03-01 20:08:30.597626",
        "current_token_price": 5.53,
        "total_value_locked": 22830294.49,
        "min_apy": 0.01,
        "avg_apy": 2.44,
        "max_apy": 18.1,
        "swap_cost": 0.0000752458552631579,
        "staking_cost": 0.0000752458552631579
    },
    {
        "id": 27,
        "datetime": "2021-03-01 20:08:30.738722",
        "current_token_price": 5.53,
        "total_value_locked": 22830294.49,
        "min_apy": 0.01,
        "avg_apy": 2.44,
        "max_apy": 18.1,
        "swap_cost": 0.0000752458552631579,
        "staking_cost": 0.0000752458552631579
    },
    {
        "id": 28,
        "datetime": "2021-03-01 20:09:34.515693",
        "current_token_price": 5.53,
        "total_value_locked": 22830294.49,
        "min_apy": 0.01,
        "avg_apy": 2.44,
        "max_apy": 18.1,
        "swap_cost": 0.0000752458552631579,
        "staking_cost": 0.0000752458552631579
    },
    {
        "id": 29,
        "datetime": "2021-03-01 20:09:34.720444",
        "current_token_price": 5.53,
        "total_value_locked": 22830294.49,
        "min_apy": 0.01,
        "avg_apy": 2.44,
        "max_apy": 18.1,
        "swap_cost": 0.0000752458552631579,
        "staking_cost": 0.0000752458552631579
    },
    {
        "id": 30,
        "datetime": "2021-03-01 20:10:38.442294",
        "current_token_price": 5.53,
        "total_value_locked": 22830294.49,
        "min_apy": 0.01,
        "avg_apy": 2.44,
        "max_apy": 18.1,
        "swap_cost": 0.0000752458552631579,
        "staking_cost": 0.0000752458552631579
    },
    {
        "id": 31,
        "datetime": "2021-03-01 20:10:38.565418",
        "current_token_price": 5.53,
        "total_value_locked": 22830294.49,
        "min_apy": 0.01,
        "avg_apy": 2.44,
        "max_apy": 18.1,
        "swap_cost": 0.0000752458552631579,
        "staking_cost": 0.0000752458552631579
    },
    {
        "id": 32,
        "datetime": "2021-03-01 20:11:42.442444",
        "current_token_price": 5.53,
        "total_value_locked": 22830294.49,
        "min_apy": 0.01,
        "avg_apy": 2.44,
        "max_apy": 18.1,
        "swap_cost": 0.0000752458552631579,
        "staking_cost": 0.0000752458552631579
    },
    {
        "id": 33,
        "datetime": "2021-03-01 20:11:42.465054",
        "current_token_price": 5.53,
        "total_value_locked": 22830294.49,
        "min_apy": 0.01,
        "avg_apy": 2.44,
        "max_apy": 18.1,
        "swap_cost": 0.0000752458552631579,
        "staking_cost": 0.0000752458552631579
    },
    {
        "id": 34,
        "datetime": "2021-03-01 20:11:59.449566",
        "current_token_price": 5.53,
        "total_value_locked": 22830294.49,
        "min_apy": 0.01,
        "avg_apy": 2.44,
        "max_apy": 18.1,
        "swap_cost": 0.00007509526315789475,
        "staking_cost": 0.00007509526315789475
    },
    {
        "id": 35,
        "datetime": "2021-03-01 20:12:02.610330",
        "current_token_price": 5.53,
        "total_value_locked": 22830294.49,
        "min_apy": 0.01,
        "avg_apy": 2.44,
        "max_apy": 18.1,
        "swap_cost": 0.00007509526315789475,
        "staking_cost": 0.00007509526315789475
    },
    {
        "id": 36,
        "datetime": "2021-03-01 23:04:41.162815",
        "current_token_price": 5.37,
        "total_value_locked": 23342009.18,
        "min_apy": 0.01,
        "avg_apy": 2.44,
        "max_apy": 18.1,
        "swap_cost": 0.00007379013157894737,
        "staking_cost": 0.00007379013157894737
    },
    {
        "id": 37,
        "datetime": "2021-03-01 23:04:51.204439",
        "current_token_price": 5.37,
        "total_value_locked": 23342009.18,
        "min_apy": 0.01,
        "avg_apy": 2.44,
        "max_apy": 18.1,
        "swap_cost": 0.00007379013157894737,
        "staking_cost": 0.00007379013157894737
    },
    {
        "id": 38,
        "datetime": "2021-03-01 23:33:04.131214",
        "current_token_price": 5.38,
        "total_value_locked": 23342009.18,
        "min_apy": 0.01,
        "avg_apy": 2.44,
        "max_apy": 18.1,
        "swap_cost": 0.0000742921052631579,
        "staking_cost": 0.0000742921052631579
    },
    {
        "id": 39,
        "datetime": "2021-03-01 23:34:02.537074",
        "current_token_price": 5.38,
        "total_value_locked": 23342009.18,
        "min_apy": 0.01,
        "avg_apy": 2.44,
        "max_apy": 18.1,
        "swap_cost": 0.0000742921052631579,
        "staking_cost": 0.0000742921052631579
    },
    {
        "id": 40,
        "datetime": "2021-03-01 23:35:46.927804",
        "current_token_price": 5.38,
        "total_value_locked": 23342009.18,
        "min_apy": 0.01,
        "avg_apy": 2.44,
        "max_apy": 18.1,
        "swap_cost": 0.0000742921052631579,
        "staking_cost": 0.0000742921052631579
    },
    {
        "id": 41,
        "datetime": "2021-03-01 23:36:03.747195",
        "current_token_price": 5.44,
        "total_value_locked": 23342009.18,
        "min_apy": 0.01,
        "avg_apy": 2.44,
        "max_apy": 18.1,
        "swap_cost": 0.0000742921052631579,
        "staking_cost": 0.0000742921052631579
    },
    {
        "id": 42,
        "datetime": "2021-03-01 23:37:03.253915",
        "current_token_price": 5.44,
        "total_value_locked": 23342009.18,
        "min_apy": 0.01,
        "avg_apy": 2.44,
        "max_apy": 18.1,
        "swap_cost": 0.0000742921052631579,
        "staking_cost": 0.0000742921052631579
    },
    {
        "id": 43,
        "datetime": "2021-03-01 23:38:05.006851",
        "current_token_price": 5.44,
        "total_value_locked": 23342009.18,
        "min_apy": 0.01,
        "avg_apy": 2.44,
        "max_apy": 18.1,
        "swap_cost": 0.0000742921052631579,
        "staking_cost": 0.0000742921052631579
    },
    {
        "id": 44,
        "datetime": "2021-03-01 23:39:06.618747",
        "current_token_price": 5.44,
        "total_value_locked": 23342009.18,
        "min_apy": 0.01,
        "avg_apy": 2.44,
        "max_apy": 18.1,
        "swap_cost": 0.0000742921052631579,
        "staking_cost": 0.0000742921052631579
    },
    {
        "id": 45,
        "datetime": "2021-03-01 23:40:03.227275",
        "current_token_price": 5.44,
        "total_value_locked": 23342009.18,
        "min_apy": 0.01,
        "avg_apy": 2.44,
        "max_apy": 18.1,
        "swap_cost": 0.0000742921052631579,
        "staking_cost": 0.0000742921052631579
    },
    {
        "id": 46,
        "datetime": "2021-03-01 23:41:20.362040",
        "current_token_price": 5.47,
        "total_value_locked": 23342009.18,
        "min_apy": 0.01,
        "avg_apy": 2.44,
        "max_apy": 18.1,
        "swap_cost": 0.0000742921052631579,
        "staking_cost": 0.0000742921052631579
    },
    {
        "id": 47,
        "datetime": "2021-03-01 23:42:03.021837",
        "current_token_price": 5.47,
        "total_value_locked": 23342009.18,
        "min_apy": 0.01,
        "avg_apy": 2.44,
        "max_apy": 18.1,
        "swap_cost": 0.0000742921052631579,
        "staking_cost": 0.0000742921052631579
    },
    {
        "id": 48,
        "datetime": "2021-03-01 23:43:11.681743",
        "current_token_price": 5.47,
        "total_value_locked": 23342009.18,
        "min_apy": 0.01,
        "avg_apy": 2.44,
        "max_apy": 18.1,
        "swap_cost": 0.0000742921052631579,
        "staking_cost": 0.0000742921052631579
    },
    {
        "id": 49,
        "datetime": "2021-03-01 23:44:03.246346",
        "current_token_price": 5.47,
        "total_value_locked": 23342009.18,
        "min_apy": 0.01,
        "avg_apy": 2.44,
        "max_apy": 18.1,
        "swap_cost": 0.0000742921052631579,
        "staking_cost": 0.0000742921052631579
    },
    {
        "id": 50,
        "datetime": "2021-03-01 23:44:50.568356",
        "current_token_price": 5.47,
        "total_value_locked": 23342009.18,
        "min_apy": 0.01,
        "avg_apy": 2.44,
        "max_apy": 18.1,
        "swap_cost": 0.00007474388157894737,
        "staking_cost": 0.00007474388157894737
    },
    {
        "id": 51,
        "datetime": "2021-03-01 23:45:09.736597",
        "current_token_price": 5.47,
        "total_value_locked": 23342009.18,
        "min_apy": 0.01,
        "avg_apy": 2.44,
        "max_apy": 18.1,
        "swap_cost": 0.00007474388157894737,
        "staking_cost": 0.00007474388157894737
    },
    {
        "id": 52,
        "datetime": "2021-03-01 23:45:34.300938",
        "current_token_price": 5.47,
        "total_value_locked": 23342009.18,
        "min_apy": 0.01,
        "avg_apy": 2.44,
        "max_apy": 18.1,
        "swap_cost": 0.00007474388157894737,
        "staking_cost": 0.00007474388157894737
    },
    {
        "id": 53,
        "datetime": "2021-03-01 23:45:51.054059",
        "current_token_price": 5.47,
        "total_value_locked": 23342009.18,
        "min_apy": 0.01,
        "avg_apy": 2.44,
        "max_apy": 18.1,
        "swap_cost": 0.00007474388157894737,
        "staking_cost": 0.00007474388157894737
    },
    {
        "id": 54,
        "datetime": "2021-03-01 23:46:09.868357",
        "current_token_price": 5.47,
        "total_value_locked": 23342009.18,
        "min_apy": 0.01,
        "avg_apy": 2.44,
        "max_apy": 18.1,
        "swap_cost": 0.00007474388157894737,
        "staking_cost": 0.00007474388157894737
    },
    {
        "id": 55,
        "datetime": "2021-03-01 23:46:30.832205",
        "current_token_price": 5.47,
        "total_value_locked": 23342009.18,
        "min_apy": 0.01,
        "avg_apy": 2.44,
        "max_apy": 18.1,
        "swap_cost": 0.00007474388157894737,
        "staking_cost": 0.00007474388157894737
    },
    {
        "id": 56,
        "datetime": "2021-03-01 23:46:52.004530",
        "current_token_price": 5.47,
        "total_value_locked": 23342009.18,
        "min_apy": 0.01,
        "avg_apy": 2.44,
        "max_apy": 18.1,
        "swap_cost": 0.00007474388157894737,
        "staking_cost": 0.00007474388157894737
    },
    {
        "id": 57,
        "datetime": "2021-03-01 23:47:10.426844",
        "current_token_price": 5.47,
        "total_value_locked": 23342009.18,
        "min_apy": 0.01,
        "avg_apy": 2.44,
        "max_apy": 18.1,
        "swap_cost": 0.00007474388157894737,
        "staking_cost": 0.00007474388157894737
    },
    {
        "id": 58,
        "datetime": "2021-03-01 23:47:30.546566",
        "current_token_price": 5.47,
        "total_value_locked": 23342009.18,
        "min_apy": 0.01,
        "avg_apy": 2.44,
        "max_apy": 18.1,
        "swap_cost": 0.00007474388157894737,
        "staking_cost": 0.00007474388157894737
    },
    {
        "id": 59,
        "datetime": "2021-03-01 23:47:50.523997",
        "current_token_price": 5.47,
        "total_value_locked": 23342009.18,
        "min_apy": 0.01,
        "avg_apy": 2.44,
        "max_apy": 18.1,
        "swap_cost": 0.00007474388157894737,
        "staking_cost": 0.00007474388157894737
    },
    {
        "id": 60,
        "datetime": "2021-03-01 23:48:11.967275",
        "current_token_price": 5.47,
        "total_value_locked": 23342009.18,
        "min_apy": 0.01,
        "avg_apy": 2.44,
        "max_apy": 18.1,
        "swap_cost": 0.00007474388157894737,
        "staking_cost": 0.00007474388157894737
    },
    {
        "id": 61,
        "datetime": "2021-03-01 23:48:29.866010",
        "current_token_price": 5.47,
        "total_value_locked": 23342009.18,
        "min_apy": 0.01,
        "avg_apy": 2.44,
        "max_apy": 18.1,
        "swap_cost": 0.00007474388157894737,
        "staking_cost": 0.00007474388157894737
    },
    {
        "id": 62,
        "datetime": "2021-03-01 23:48:49.862334",
        "current_token_price": 5.47,
        "total_value_locked": 23342009.18,
        "min_apy": 0.01,
        "avg_apy": 2.44,
        "max_apy": 18.1,
        "swap_cost": 0.00007474388157894737,
        "staking_cost": 0.00007474388157894737
    },
    {
        "id": 63,
        "datetime": "2021-03-01 23:49:10.795169",
        "current_token_price": 5.47,
        "total_value_locked": 23342009.18,
        "min_apy": 0.01,
        "avg_apy": 2.44,
        "max_apy": 18.1,
        "swap_cost": 0.00007474388157894737,
        "staking_cost": 0.00007474388157894737
    },
    {
        "id": 64,
        "datetime": "2021-03-01 23:49:30.485058",
        "current_token_price": 5.48,
        "total_value_locked": 23342009.18,
        "min_apy": 0.01,
        "avg_apy": 2.44,
        "max_apy": 18.1,
        "swap_cost": 0.00007474388157894737,
        "staking_cost": 0.00007474388157894737
    },
    {
        "id": 65,
        "datetime": "2021-03-01 23:49:51.009713",
        "current_token_price": 5.48,
        "total_value_locked": 23342009.18,
        "min_apy": 0.01,
        "avg_apy": 2.44,
        "max_apy": 18.1,
        "swap_cost": 0.00007474388157894737,
        "staking_cost": 0.00007474388157894737
    },
    {
        "id": 66,
        "datetime": "2021-03-01 23:50:10.502179",
        "current_token_price": 5.48,
        "total_value_locked": 23342009.18,
        "min_apy": 0.01,
        "avg_apy": 2.44,
        "max_apy": 18.1,
        "swap_cost": 0.00007474388157894737,
        "staking_cost": 0.00007474388157894737
    },
    {
        "id": 67,
        "datetime": "2021-03-01 23:50:29.882912",
        "current_token_price": 5.48,
        "total_value_locked": 23342009.18,
        "min_apy": 0.01,
        "avg_apy": 2.44,
        "max_apy": 18.1,
        "swap_cost": 0.00007474388157894737,
        "staking_cost": 0.00007474388157894737
    },
    {
        "id": 68,
        "datetime": "2021-03-01 23:50:51.483572",
        "current_token_price": 5.48,
        "total_value_locked": 23342009.18,
        "min_apy": 0.01,
        "avg_apy": 2.44,
        "max_apy": 18.1,
        "swap_cost": 0.00007474388157894737,
        "staking_cost": 0.00007474388157894737
    },
    {
        "id": 69,
        "datetime": "2021-03-01 23:51:10.797397",
        "current_token_price": 5.48,
        "total_value_locked": 23342009.18,
        "min_apy": 0.01,
        "avg_apy": 2.44,
        "max_apy": 18.1,
        "swap_cost": 0.00007474388157894737,
        "staking_cost": 0.00007474388157894737
    },
    {
        "id": 70,
        "datetime": "2021-03-01 23:51:31.190594",
        "current_token_price": 5.48,
        "total_value_locked": 23342009.18,
        "min_apy": 0.01,
        "avg_apy": 2.44,
        "max_apy": 18.1,
        "swap_cost": 0.00007474388157894737,
        "staking_cost": 0.00007474388157894737
    },
    {
        "id": 71,
        "datetime": "2021-03-01 23:51:50.381606",
        "current_token_price": 5.48,
        "total_value_locked": 23342009.18,
        "min_apy": 0.01,
        "avg_apy": 2.44,
        "max_apy": 18.1,
        "swap_cost": 0.00007474388157894737,
        "staking_cost": 0.00007474388157894737
    },
    {
        "id": 72,
        "datetime": "2021-03-01 23:52:10.862002",
        "current_token_price": 5.48,
        "total_value_locked": 23342009.18,
        "min_apy": 0.01,
        "avg_apy": 2.44,
        "max_apy": 18.1,
        "swap_cost": 0.00007474388157894737,
        "staking_cost": 0.00007474388157894737
    },
    {
        "id": 73,
        "datetime": "2021-03-01 23:52:30.199699",
        "current_token_price": 5.48,
        "total_value_locked": 23342009.18,
        "min_apy": 0.01,
        "avg_apy": 2.44,
        "max_apy": 18.1,
        "swap_cost": 0.00007474388157894737,
        "staking_cost": 0.00007474388157894737
    },
    {
        "id": 74,
        "datetime": "2021-03-01 23:52:50.815275",
        "current_token_price": 5.48,
        "total_value_locked": 23342009.18,
        "min_apy": 0.01,
        "avg_apy": 2.44,
        "max_apy": 18.1,
        "swap_cost": 0.00007474388157894737,
        "staking_cost": 0.00007474388157894737
    },
    {
        "id": 75,
        "datetime": "2021-03-01 23:53:10.448151",
        "current_token_price": 5.48,
        "total_value_locked": 23342009.18,
        "min_apy": 0.01,
        "avg_apy": 2.44,
        "max_apy": 18.1,
        "swap_cost": 0.00007474388157894737,
        "staking_cost": 0.00007474388157894737
    },
    {
        "id": 76,
        "datetime": "2021-03-01 23:53:30.664493",
        "current_token_price": 5.48,
        "total_value_locked": 23342009.18,
        "min_apy": 0.01,
        "avg_apy": 2.44,
        "max_apy": 18.1,
        "swap_cost": 0.00007474388157894737,
        "staking_cost": 0.00007474388157894737
    },
    {
        "id": 77,
        "datetime": "2021-03-01 23:53:49.765110",
        "current_token_price": 5.48,
        "total_value_locked": 23342009.18,
        "min_apy": 0.01,
        "avg_apy": 2.44,
        "max_apy": 18.1,
        "swap_cost": 0.00007474388157894737,
        "staking_cost": 0.00007474388157894737
    },
    {
        "id": 78,
        "datetime": "2021-03-01 23:54:10.832602",
        "current_token_price": 5.48,
        "total_value_locked": 23342009.18,
        "min_apy": 0.01,
        "avg_apy": 2.44,
        "max_apy": 18.1,
        "swap_cost": 0.00007474388157894737,
        "staking_cost": 0.00007474388157894737
    },
    {
        "id": 79,
        "datetime": "2021-03-01 23:54:29.474777",
        "current_token_price": 5.48,
        "total_value_locked": 23342009.18,
        "min_apy": 0.01,
        "avg_apy": 2.44,
        "max_apy": 18.1,
        "swap_cost": 0.00007474388157894737,
        "staking_cost": 0.00007474388157894737
    },
    {
        "id": 80,
        "datetime": "2021-03-02 00:49:53.723370",
        "current_token_price": 5.69,
        "total_value_locked": 23342009.18,
        "min_apy": 0.01,
        "avg_apy": 2.44,
        "max_apy": 18.1,
        "swap_cost": 0.00007800671052631579,
        "staking_cost": 0.00007800671052631579
    },
    {
        "id": 81,
        "datetime": "2021-03-02 00:50:52.612557",
        "current_token_price": 5.69,
        "total_value_locked": 23342009.18,
        "min_apy": 0.01,
        "avg_apy": 2.44,
        "max_apy": 18.1,
        "swap_cost": 0.00007800671052631579,
        "staking_cost": 0.00007800671052631579
    },
    {
        "id": 82,
        "datetime": "2021-03-02 00:51:52.783299",
        "current_token_price": 5.69,
        "total_value_locked": 23342009.18,
        "min_apy": 0.01,
        "avg_apy": 2.44,
        "max_apy": 18.1,
        "swap_cost": 0.00007800671052631579,
        "staking_cost": 0.00007800671052631579
    },
    {
        "id": 83,
        "datetime": "2021-03-02 00:52:53.927146",
        "current_token_price": 5.69,
        "total_value_locked": 23342009.18,
        "min_apy": 0.01,
        "avg_apy": 2.44,
        "max_apy": 18.1,
        "swap_cost": 0.00007800671052631579,
        "staking_cost": 0.00007800671052631579
    },
    {
        "id": 84,
        "datetime": "2021-03-02 00:53:52.766264",
        "current_token_price": 5.69,
        "total_value_locked": 23342009.18,
        "min_apy": 0.01,
        "avg_apy": 2.44,
        "max_apy": 18.1,
        "swap_cost": 0.00007800671052631579,
        "staking_cost": 0.00007800671052631579
    },
    {
        "id": 85,
        "datetime": "2021-03-02 00:54:52.804087",
        "current_token_price": 5.79,
        "total_value_locked": 23342009.18,
        "min_apy": 0.01,
        "avg_apy": 2.44,
        "max_apy": 18.1,
        "swap_cost": 0.00007800671052631579,
        "staking_cost": 0.00007800671052631579
    },
    {
        "id": 86,
        "datetime": "2021-03-02 00:55:52.992722",
        "current_token_price": 5.79,
        "total_value_locked": 23342009.18,
        "min_apy": 0.01,
        "avg_apy": 2.44,
        "max_apy": 18.1,
        "swap_cost": 0.00007800671052631579,
        "staking_cost": 0.00007800671052631579
    },
    {
        "id": 87,
        "datetime": "2021-03-02 00:56:53.587745",
        "current_token_price": 5.79,
        "total_value_locked": 23342009.18,
        "min_apy": 0.01,
        "avg_apy": 2.44,
        "max_apy": 18.1,
        "swap_cost": 0.00007800671052631579,
        "staking_cost": 0.00007800671052631579
    },
    {
        "id": 88,
        "datetime": "2021-03-06 00:22:40.716025",
        "current_token_price": 4.88,
        "total_value_locked": 20922747.13,
        "min_apy": 0.01,
        "avg_apy": 2.27,
        "max_apy": 17.54,
        "swap_cost": 0.00006490519736842106,
        "staking_cost": 0.00006490519736842106
    },
    {
        "id": 89,
        "datetime": "2021-03-06 00:22:53.430191",
        "current_token_price": 4.88,
        "total_value_locked": 20922747.13,
        "min_apy": 0.01,
        "avg_apy": 2.27,
        "max_apy": 17.54,
        "swap_cost": 0.00006490519736842106,
        "staking_cost": 0.00006490519736842106
    },
    {
        "id": 90,
        "datetime": "2021-03-06 00:23:03.154477",
        "current_token_price": 4.88,
        "total_value_locked": 20922747.13,
        "min_apy": 0.01,
        "avg_apy": 2.27,
        "max_apy": 17.54,
        "swap_cost": 0.00006490519736842106,
        "staking_cost": 0.00006490519736842106
    },
    {
        "id": 91,
        "datetime": "2021-03-06 00:23:13.592658",
        "current_token_price": 4.88,
        "total_value_locked": 20922747.13,
        "min_apy": 0.01,
        "avg_apy": 2.27,
        "max_apy": 17.54,
        "swap_cost": 0.00006490519736842106,
        "staking_cost": 0.00006490519736842106
    },
    {
        "id": 92,
        "datetime": "2021-03-06 00:24:40.212730",
        "current_token_price": 4.88,
        "total_value_locked": 20922747.13,
        "min_apy": 0.01,
        "avg_apy": 2.27,
        "max_apy": 17.54,
        "swap_cost": 0.00006490519736842106,
        "staking_cost": 0.00006490519736842106
    },
    {
        "id": 93,
        "datetime": "2021-03-06 00:24:50.079686",
        "current_token_price": 4.88,
        "total_value_locked": 20922747.13,
        "min_apy": 0.01,
        "avg_apy": 2.27,
        "max_apy": 17.54,
        "swap_cost": 0.00006490519736842106,
        "staking_cost": 0.00006490519736842106
    }
]

export const uniExchangeMetricsSample: ExchangeMetric [] = [
    {
        "id": 7,
        "datetime": "2021-03-01 19:24:17.654979",
        "current_token_price": 23.96,
        "total_value_locked": 4024111499.250996,
        "min_apy": 0,
        "avg_apy": 34.39,
        "max_apy": 1917.16,
        "swap_cost": 33.590598,
        "staking_cost": 29.39177325
    },
    {
        "id": 8,
        "datetime": "2021-03-01 19:24:18.568008",
        "current_token_price": 23.96,
        "total_value_locked": 4024111499.250996,
        "min_apy": 0,
        "avg_apy": 34.39,
        "max_apy": 1917.16,
        "swap_cost": 33.590598,
        "staking_cost": 29.39177325
    },
    {
        "id": 9,
        "datetime": "2021-03-01 19:25:24.171835",
        "current_token_price": 23.99,
        "total_value_locked": 4023954268.0193458,
        "min_apy": 0,
        "avg_apy": 34.39,
        "max_apy": 1917.16,
        "swap_cost": 33.590598,
        "staking_cost": 29.39177325
    },
    {
        "id": 10,
        "datetime": "2021-03-01 19:25:24.613877",
        "current_token_price": 23.99,
        "total_value_locked": 4023954268.0193458,
        "min_apy": 0,
        "avg_apy": 34.39,
        "max_apy": 1917.16,
        "swap_cost": 33.590598,
        "staking_cost": 29.39177325
    },
    {
        "id": 11,
        "datetime": "2021-03-01 19:26:53.351325",
        "current_token_price": 23.99,
        "total_value_locked": 4026063051.9980664,
        "min_apy": 0,
        "avg_apy": 34.39,
        "max_apy": 1917.16,
        "swap_cost": 33.692274000000005,
        "staking_cost": 29.480739750000005
    },
    {
        "id": 12,
        "datetime": "2021-03-01 19:26:55.584445",
        "current_token_price": 23.99,
        "total_value_locked": 4025366567.5408096,
        "min_apy": 0,
        "avg_apy": 34.39,
        "max_apy": 1917.16,
        "swap_cost": 33.692274000000005,
        "staking_cost": 29.480739750000005
    },
    {
        "id": 13,
        "datetime": "2021-03-01 19:28:10.434397",
        "current_token_price": 23.99,
        "total_value_locked": 4021563500.902781,
        "min_apy": 0,
        "avg_apy": 34.39,
        "max_apy": 1917.16,
        "swap_cost": 33.692274000000005,
        "staking_cost": 29.480739750000005
    },
    {
        "id": 14,
        "datetime": "2021-03-01 19:28:13.531111",
        "current_token_price": 23.99,
        "total_value_locked": 4021563500.902781,
        "min_apy": 0,
        "avg_apy": 34.39,
        "max_apy": 1917.16,
        "swap_cost": 33.692274000000005,
        "staking_cost": 29.480739750000005
    },
    {
        "id": 15,
        "datetime": "2021-03-01 20:01:33.747073",
        "current_token_price": 24.12,
        "total_value_locked": 4043145184.040876,
        "min_apy": 0,
        "avg_apy": 34.39,
        "max_apy": 1917.16,
        "swap_cost": 29.04568,
        "staking_cost": 25.41497
    },
    {
        "id": 16,
        "datetime": "2021-03-01 20:01:38.365400",
        "current_token_price": 24.12,
        "total_value_locked": 4043145184.040876,
        "min_apy": 0,
        "avg_apy": 34.39,
        "max_apy": 1917.16,
        "swap_cost": 29.04568,
        "staking_cost": 25.41497
    },
    {
        "id": 17,
        "datetime": "2021-03-01 20:02:38.268371",
        "current_token_price": 24.12,
        "total_value_locked": 4042599601.4981375,
        "min_apy": 0,
        "avg_apy": 34.39,
        "max_apy": 1917.16,
        "swap_cost": 29.04568,
        "staking_cost": 25.41497
    },
    {
        "id": 18,
        "datetime": "2021-03-01 20:03:44.700789",
        "current_token_price": 24.1,
        "total_value_locked": 4041692750.0604224,
        "min_apy": 0,
        "avg_apy": 34.39,
        "max_apy": 1917.16,
        "swap_cost": 29.04568,
        "staking_cost": 25.41497
    },
    {
        "id": 19,
        "datetime": "2021-03-01 20:04:49.464065",
        "current_token_price": 24.1,
        "total_value_locked": 4039631501.784825,
        "min_apy": 0,
        "avg_apy": 34.39,
        "max_apy": 1917.16,
        "swap_cost": 29.04568,
        "staking_cost": 25.41497
    },
    {
        "id": 20,
        "datetime": "2021-03-01 20:05:18.202195",
        "current_token_price": 24.1,
        "total_value_locked": 4039902818.305667,
        "min_apy": 0,
        "avg_apy": 34.39,
        "max_apy": 1917.16,
        "swap_cost": 28.462092,
        "staking_cost": 24.904330500000004
    },
    {
        "id": 21,
        "datetime": "2021-03-01 20:05:19.190853",
        "current_token_price": 24.1,
        "total_value_locked": 4039902818.305667,
        "min_apy": 0,
        "avg_apy": 34.39,
        "max_apy": 1917.16,
        "swap_cost": 28.462092,
        "staking_cost": 24.904330500000004
    },
    {
        "id": 22,
        "datetime": "2021-03-01 20:06:22.814032",
        "current_token_price": 24.1,
        "total_value_locked": 4041609777.678788,
        "min_apy": 0,
        "avg_apy": 34.39,
        "max_apy": 1917.16,
        "swap_cost": 28.462092,
        "staking_cost": 24.904330500000004
    },
    {
        "id": 23,
        "datetime": "2021-03-01 20:06:23.415270",
        "current_token_price": 24.1,
        "total_value_locked": 4041609777.678788,
        "min_apy": 0,
        "avg_apy": 34.39,
        "max_apy": 1917.16,
        "swap_cost": 28.462092,
        "staking_cost": 24.904330500000004
    },
    {
        "id": 24,
        "datetime": "2021-03-01 20:07:27.453816",
        "current_token_price": 24.1,
        "total_value_locked": 4041650328.2088766,
        "min_apy": 0,
        "avg_apy": 34.39,
        "max_apy": 1917.16,
        "swap_cost": 28.462092,
        "staking_cost": 24.904330500000004
    },
    {
        "id": 25,
        "datetime": "2021-03-01 20:07:27.686195",
        "current_token_price": 24.1,
        "total_value_locked": 4041641094.760753,
        "min_apy": 0,
        "avg_apy": 34.39,
        "max_apy": 1917.16,
        "swap_cost": 28.462092,
        "staking_cost": 24.904330500000004
    },
    {
        "id": 26,
        "datetime": "2021-03-01 20:08:32.154288",
        "current_token_price": 24.1,
        "total_value_locked": 4041480633.591145,
        "min_apy": 0,
        "avg_apy": 34.39,
        "max_apy": 1917.16,
        "swap_cost": 28.462092,
        "staking_cost": 24.904330500000004
    },
    {
        "id": 27,
        "datetime": "2021-03-01 20:08:32.196494",
        "current_token_price": 24.1,
        "total_value_locked": 4041480633.591145,
        "min_apy": 0,
        "avg_apy": 34.39,
        "max_apy": 1917.16,
        "swap_cost": 28.462092,
        "staking_cost": 24.904330500000004
    },
    {
        "id": 28,
        "datetime": "2021-03-01 20:09:35.938050",
        "current_token_price": 24.07,
        "total_value_locked": 4045624391.5303106,
        "min_apy": 0,
        "avg_apy": 34.39,
        "max_apy": 1917.16,
        "swap_cost": 28.462092,
        "staking_cost": 24.904330500000004
    },
    {
        "id": 29,
        "datetime": "2021-03-01 20:09:36.119212",
        "current_token_price": 24.07,
        "total_value_locked": 4045624391.5303106,
        "min_apy": 0,
        "avg_apy": 34.39,
        "max_apy": 1917.16,
        "swap_cost": 28.462092,
        "staking_cost": 24.904330500000004
    },
    {
        "id": 30,
        "datetime": "2021-03-01 20:10:39.817978",
        "current_token_price": 24.07,
        "total_value_locked": 4045560756.7828794,
        "min_apy": 0,
        "avg_apy": 34.39,
        "max_apy": 1917.16,
        "swap_cost": 28.462092,
        "staking_cost": 24.904330500000004
    },
    {
        "id": 31,
        "datetime": "2021-03-01 20:10:39.920455",
        "current_token_price": 24.07,
        "total_value_locked": 4045560756.7828794,
        "min_apy": 0,
        "avg_apy": 34.39,
        "max_apy": 1917.16,
        "swap_cost": 28.462092,
        "staking_cost": 24.904330500000004
    },
    {
        "id": 32,
        "datetime": "2021-03-01 20:11:43.868036",
        "current_token_price": 24.07,
        "total_value_locked": 4045126124.5545025,
        "min_apy": 0,
        "avg_apy": 34.39,
        "max_apy": 1917.16,
        "swap_cost": 28.462092,
        "staking_cost": 24.904330500000004
    },
    {
        "id": 33,
        "datetime": "2021-03-01 20:11:44.208889",
        "current_token_price": 24.07,
        "total_value_locked": 4045126124.5545025,
        "min_apy": 0,
        "avg_apy": 34.39,
        "max_apy": 1917.16,
        "swap_cost": 28.462092,
        "staking_cost": 24.904330500000004
    },
    {
        "id": 34,
        "datetime": "2021-03-01 20:12:00.649319",
        "current_token_price": 24.07,
        "total_value_locked": 4045518712.191474,
        "min_apy": 0,
        "avg_apy": 34.39,
        "max_apy": 1917.16,
        "swap_cost": 27.177218,
        "staking_cost": 23.78006575
    },
    {
        "id": 35,
        "datetime": "2021-03-01 20:12:04.217677",
        "current_token_price": 24.07,
        "total_value_locked": 4045518712.191474,
        "min_apy": 0,
        "avg_apy": 34.39,
        "max_apy": 1917.16,
        "swap_cost": 27.177218,
        "staking_cost": 23.78006575
    },
    {
        "id": 36,
        "datetime": "2021-03-01 23:04:42.757736",
        "current_token_price": 23.7,
        "total_value_locked": 4022011988.492735,
        "min_apy": 0,
        "avg_apy": 34.39,
        "max_apy": 1917.16,
        "swap_cost": 33.861438,
        "staking_cost": 29.62875825
    },
    {
        "id": 37,
        "datetime": "2021-03-01 23:04:52.846441",
        "current_token_price": 23.7,
        "total_value_locked": 4022011988.492735,
        "min_apy": 0,
        "avg_apy": 34.39,
        "max_apy": 1917.16,
        "swap_cost": 33.861438,
        "staking_cost": 29.62875825
    },
    {
        "id": 38,
        "datetime": "2021-03-01 23:33:06.433295",
        "current_token_price": 23.91,
        "total_value_locked": 4055242493.331256,
        "min_apy": 0,
        "avg_apy": 34.39,
        "max_apy": 1917.16,
        "swap_cost": 27.823795999999994,
        "staking_cost": 24.345821499999996
    },
    {
        "id": 39,
        "datetime": "2021-03-01 23:34:04.531026",
        "current_token_price": 23.91,
        "total_value_locked": 4059915683.5619516,
        "min_apy": 0,
        "avg_apy": 34.39,
        "max_apy": 1917.16,
        "swap_cost": 27.823795999999994,
        "staking_cost": 24.345821499999996
    },
    {
        "id": 40,
        "datetime": "2021-03-01 23:35:48.990384",
        "current_token_price": 24.06,
        "total_value_locked": 4061281289.0729165,
        "min_apy": 0,
        "avg_apy": 34.39,
        "max_apy": 1917.16,
        "swap_cost": 27.823795999999994,
        "staking_cost": 24.345821499999996
    },
    {
        "id": 41,
        "datetime": "2021-03-01 23:36:05.491262",
        "current_token_price": 24.06,
        "total_value_locked": 4061281289.0729165,
        "min_apy": 0,
        "avg_apy": 34.39,
        "max_apy": 1917.16,
        "swap_cost": 27.823795999999994,
        "staking_cost": 24.345821499999996
    },
    {
        "id": 42,
        "datetime": "2021-03-01 23:37:05.220112",
        "current_token_price": 24.06,
        "total_value_locked": 4060725173.790749,
        "min_apy": 0,
        "avg_apy": 34.39,
        "max_apy": 1917.16,
        "swap_cost": 27.823795999999994,
        "staking_cost": 24.345821499999996
    },
    {
        "id": 43,
        "datetime": "2021-03-01 23:38:07.794656",
        "current_token_price": 24.06,
        "total_value_locked": 4064341719.827902,
        "min_apy": 0,
        "avg_apy": 34.39,
        "max_apy": 1917.16,
        "swap_cost": 27.823795999999994,
        "staking_cost": 24.345821499999996
    },
    {
        "id": 44,
        "datetime": "2021-03-01 23:39:08.515406",
        "current_token_price": 24.06,
        "total_value_locked": 4069863008.4203396,
        "min_apy": 0,
        "avg_apy": 34.39,
        "max_apy": 1917.16,
        "swap_cost": 27.823795999999994,
        "staking_cost": 24.345821499999996
    },
    {
        "id": 45,
        "datetime": "2021-03-01 23:40:04.696252",
        "current_token_price": 24.06,
        "total_value_locked": 4072121477.8041773,
        "min_apy": 0,
        "avg_apy": 34.39,
        "max_apy": 1917.16,
        "swap_cost": 27.823795999999994,
        "staking_cost": 24.345821499999996
    },
    {
        "id": 46,
        "datetime": "2021-03-01 23:41:22.414104",
        "current_token_price": 24.18,
        "total_value_locked": 4066409031.366376,
        "min_apy": 0,
        "avg_apy": 34.39,
        "max_apy": 1917.16,
        "swap_cost": 27.823795999999994,
        "staking_cost": 24.345821499999996
    },
    {
        "id": 47,
        "datetime": "2021-03-01 23:42:04.489507",
        "current_token_price": 24.18,
        "total_value_locked": 4062128501.43566,
        "min_apy": 0,
        "avg_apy": 34.39,
        "max_apy": 1917.16,
        "swap_cost": 27.823795999999994,
        "staking_cost": 24.345821499999996
    },
    {
        "id": 48,
        "datetime": "2021-03-01 23:43:13.691398",
        "current_token_price": 24.18,
        "total_value_locked": 4066499890.234531,
        "min_apy": 0,
        "avg_apy": 34.39,
        "max_apy": 1917.16,
        "swap_cost": 27.823795999999994,
        "staking_cost": 24.345821499999996
    },
    {
        "id": 49,
        "datetime": "2021-03-01 23:44:04.991317",
        "current_token_price": 24.18,
        "total_value_locked": 4066875845.592035,
        "min_apy": 0,
        "avg_apy": 34.39,
        "max_apy": 1917.16,
        "swap_cost": 27.823795999999994,
        "staking_cost": 24.345821499999996
    },
    {
        "id": 50,
        "datetime": "2021-03-01 23:44:52.099775",
        "current_token_price": 24.15,
        "total_value_locked": 4065254042.24861,
        "min_apy": 0,
        "avg_apy": 34.39,
        "max_apy": 1917.16,
        "swap_cost": 27.139023999999996,
        "staking_cost": 23.746646
    },
    {
        "id": 51,
        "datetime": "2021-03-01 23:45:11.706303",
        "current_token_price": 24.15,
        "total_value_locked": 4065254042.24861,
        "min_apy": 0,
        "avg_apy": 34.39,
        "max_apy": 1917.16,
        "swap_cost": 27.139023999999996,
        "staking_cost": 23.746646
    },
    {
        "id": 52,
        "datetime": "2021-03-01 23:45:36.272022",
        "current_token_price": 24.15,
        "total_value_locked": 4065254042.24861,
        "min_apy": 0,
        "avg_apy": 34.39,
        "max_apy": 1917.16,
        "swap_cost": 27.139023999999996,
        "staking_cost": 23.746646
    },
    {
        "id": 53,
        "datetime": "2021-03-01 23:45:52.830483",
        "current_token_price": 24.15,
        "total_value_locked": 4060334286.3630667,
        "min_apy": 0,
        "avg_apy": 34.39,
        "max_apy": 1917.16,
        "swap_cost": 27.139023999999996,
        "staking_cost": 23.746646
    },
    {
        "id": 54,
        "datetime": "2021-03-01 23:46:11.449094",
        "current_token_price": 24.15,
        "total_value_locked": 4061367821.6745667,
        "min_apy": 0,
        "avg_apy": 34.39,
        "max_apy": 1917.16,
        "swap_cost": 27.139023999999996,
        "staking_cost": 23.746646
    },
    {
        "id": 55,
        "datetime": "2021-03-01 23:46:32.409327",
        "current_token_price": 24.15,
        "total_value_locked": 4061322534.492896,
        "min_apy": 0,
        "avg_apy": 34.39,
        "max_apy": 1917.16,
        "swap_cost": 27.139023999999996,
        "staking_cost": 23.746646
    },
    {
        "id": 56,
        "datetime": "2021-03-01 23:46:53.990351",
        "current_token_price": 24.15,
        "total_value_locked": 4061310002.1769714,
        "min_apy": 0,
        "avg_apy": 34.39,
        "max_apy": 1917.16,
        "swap_cost": 27.139023999999996,
        "staking_cost": 23.746646
    },
    {
        "id": 57,
        "datetime": "2021-03-01 23:47:12.149017",
        "current_token_price": 24.15,
        "total_value_locked": 4059879038.238885,
        "min_apy": 0,
        "avg_apy": 34.39,
        "max_apy": 1917.16,
        "swap_cost": 27.139023999999996,
        "staking_cost": 23.746646
    },
    {
        "id": 58,
        "datetime": "2021-03-01 23:47:32.367293",
        "current_token_price": 24.15,
        "total_value_locked": 4059839789.892069,
        "min_apy": 0,
        "avg_apy": 34.39,
        "max_apy": 1917.16,
        "swap_cost": 27.139023999999996,
        "staking_cost": 23.746646
    },
    {
        "id": 59,
        "datetime": "2021-03-01 23:47:52.077724",
        "current_token_price": 24.15,
        "total_value_locked": 4060193601.656148,
        "min_apy": 0,
        "avg_apy": 34.39,
        "max_apy": 1917.16,
        "swap_cost": 27.139023999999996,
        "staking_cost": 23.746646
    },
    {
        "id": 60,
        "datetime": "2021-03-01 23:48:13.931007",
        "current_token_price": 24.15,
        "total_value_locked": 4055984888.71768,
        "min_apy": 0,
        "avg_apy": 34.39,
        "max_apy": 1917.16,
        "swap_cost": 27.139023999999996,
        "staking_cost": 23.746646
    },
    {
        "id": 61,
        "datetime": "2021-03-01 23:48:31.631050",
        "current_token_price": 24.15,
        "total_value_locked": 4055259861.571742,
        "min_apy": 0,
        "avg_apy": 34.39,
        "max_apy": 1917.16,
        "swap_cost": 27.139023999999996,
        "staking_cost": 23.746646
    },
    {
        "id": 62,
        "datetime": "2021-03-01 23:48:51.414181",
        "current_token_price": 24.15,
        "total_value_locked": 4055953817.9702625,
        "min_apy": 0,
        "avg_apy": 34.39,
        "max_apy": 1917.16,
        "swap_cost": 27.139023999999996,
        "staking_cost": 23.746646
    },
    {
        "id": 63,
        "datetime": "2021-03-01 23:49:12.205475",
        "current_token_price": 24.15,
        "total_value_locked": 4056130270.5442495,
        "min_apy": 0,
        "avg_apy": 34.39,
        "max_apy": 1917.16,
        "swap_cost": 27.139023999999996,
        "staking_cost": 23.746646
    },
    {
        "id": 64,
        "datetime": "2021-03-01 23:49:32.293947",
        "current_token_price": 24.14,
        "total_value_locked": 4056292821.2647967,
        "min_apy": 0,
        "avg_apy": 34.39,
        "max_apy": 1917.16,
        "swap_cost": 27.139023999999996,
        "staking_cost": 23.746646
    },
    {
        "id": 65,
        "datetime": "2021-03-01 23:49:52.565083",
        "current_token_price": 24.14,
        "total_value_locked": 4058676401.178653,
        "min_apy": 0,
        "avg_apy": 34.39,
        "max_apy": 1917.16,
        "swap_cost": 27.139023999999996,
        "staking_cost": 23.746646
    },
    {
        "id": 66,
        "datetime": "2021-03-01 23:50:12.163965",
        "current_token_price": 24.14,
        "total_value_locked": 4058676401.178653,
        "min_apy": 0,
        "avg_apy": 34.39,
        "max_apy": 1917.16,
        "swap_cost": 27.139023999999996,
        "staking_cost": 23.746646
    },
    {
        "id": 67,
        "datetime": "2021-03-01 23:50:31.825343",
        "current_token_price": 24.14,
        "total_value_locked": 4053585300.607299,
        "min_apy": 0,
        "avg_apy": 34.39,
        "max_apy": 1917.16,
        "swap_cost": 27.139023999999996,
        "staking_cost": 23.746646
    },
    {
        "id": 68,
        "datetime": "2021-03-01 23:50:53.343725",
        "current_token_price": 24.14,
        "total_value_locked": 4053644945.6897492,
        "min_apy": 0,
        "avg_apy": 34.39,
        "max_apy": 1917.16,
        "swap_cost": 27.139023999999996,
        "staking_cost": 23.746646
    },
    {
        "id": 69,
        "datetime": "2021-03-01 23:51:12.203403",
        "current_token_price": 24.14,
        "total_value_locked": 4053322050.004827,
        "min_apy": 0,
        "avg_apy": 34.39,
        "max_apy": 1917.16,
        "swap_cost": 27.139023999999996,
        "staking_cost": 23.746646
    },
    {
        "id": 70,
        "datetime": "2021-03-01 23:51:32.834259",
        "current_token_price": 24.14,
        "total_value_locked": 4053431326.1144342,
        "min_apy": 0,
        "avg_apy": 34.39,
        "max_apy": 1917.16,
        "swap_cost": 27.139023999999996,
        "staking_cost": 23.746646
    },
    {
        "id": 71,
        "datetime": "2021-03-01 23:51:51.884508",
        "current_token_price": 24.14,
        "total_value_locked": 4054621754.060576,
        "min_apy": 0,
        "avg_apy": 34.39,
        "max_apy": 1917.16,
        "swap_cost": 27.139023999999996,
        "staking_cost": 23.746646
    },
    {
        "id": 72,
        "datetime": "2021-03-01 23:52:12.612304",
        "current_token_price": 24.1,
        "total_value_locked": 4054891460.6741443,
        "min_apy": 0,
        "avg_apy": 34.39,
        "max_apy": 1917.16,
        "swap_cost": 27.139023999999996,
        "staking_cost": 23.746646
    },
    {
        "id": 73,
        "datetime": "2021-03-01 23:52:31.723295",
        "current_token_price": 24.1,
        "total_value_locked": 4055176671.189615,
        "min_apy": 0,
        "avg_apy": 34.39,
        "max_apy": 1917.16,
        "swap_cost": 27.139023999999996,
        "staking_cost": 23.746646
    },
    {
        "id": 74,
        "datetime": "2021-03-01 23:52:52.423478",
        "current_token_price": 24.1,
        "total_value_locked": 4054962224.050419,
        "min_apy": 0,
        "avg_apy": 34.39,
        "max_apy": 1917.16,
        "swap_cost": 27.139023999999996,
        "staking_cost": 23.746646
    },
    {
        "id": 75,
        "datetime": "2021-03-01 23:53:12.179244",
        "current_token_price": 24.1,
        "total_value_locked": 4052019859.3839674,
        "min_apy": 0,
        "avg_apy": 34.39,
        "max_apy": 1917.16,
        "swap_cost": 27.139023999999996,
        "staking_cost": 23.746646
    },
    {
        "id": 76,
        "datetime": "2021-03-01 23:53:32.613546",
        "current_token_price": 24.1,
        "total_value_locked": 4052639175.3135953,
        "min_apy": 0,
        "avg_apy": 34.39,
        "max_apy": 1917.16,
        "swap_cost": 27.139023999999996,
        "staking_cost": 23.746646
    },
    {
        "id": 77,
        "datetime": "2021-03-01 23:53:51.470129",
        "current_token_price": 24.1,
        "total_value_locked": 4048847321.63534,
        "min_apy": 0,
        "avg_apy": 34.39,
        "max_apy": 1917.16,
        "swap_cost": 27.139023999999996,
        "staking_cost": 23.746646
    },
    {
        "id": 78,
        "datetime": "2021-03-01 23:54:12.440205",
        "current_token_price": 24.1,
        "total_value_locked": 4048847321.63534,
        "min_apy": 0,
        "avg_apy": 34.39,
        "max_apy": 1917.16,
        "swap_cost": 27.139023999999996,
        "staking_cost": 23.746646
    },
    {
        "id": 79,
        "datetime": "2021-03-01 23:54:31.054306",
        "current_token_price": 24.1,
        "total_value_locked": 4050714379.3135796,
        "min_apy": 0,
        "avg_apy": 34.39,
        "max_apy": 1917.16,
        "swap_cost": 27.139023999999996,
        "staking_cost": 23.746646
    },
    {
        "id": 80,
        "datetime": "2021-03-02 00:49:55.652765",
        "current_token_price": 24.92,
        "total_value_locked": 4101135539.3827205,
        "min_apy": 0,
        "avg_apy": 34.39,
        "max_apy": 1917.16,
        "swap_cost": 45.523968,
        "staking_cost": 39.83347200000001
    },
    {
        "id": 81,
        "datetime": "2021-03-02 00:50:54.114736",
        "current_token_price": 24.92,
        "total_value_locked": 4103275370.2623863,
        "min_apy": 0,
        "avg_apy": 34.39,
        "max_apy": 1917.16,
        "swap_cost": 45.523968,
        "staking_cost": 39.83347200000001
    },
    {
        "id": 82,
        "datetime": "2021-03-02 00:51:54.658317",
        "current_token_price": 24.92,
        "total_value_locked": 4102819656.8000965,
        "min_apy": 0,
        "avg_apy": 34.39,
        "max_apy": 1917.16,
        "swap_cost": 45.523968,
        "staking_cost": 39.83347200000001
    },
    {
        "id": 83,
        "datetime": "2021-03-02 00:52:55.679604",
        "current_token_price": 24.92,
        "total_value_locked": 4102697693.51712,
        "min_apy": 0,
        "avg_apy": 34.39,
        "max_apy": 1917.16,
        "swap_cost": 45.523968,
        "staking_cost": 39.83347200000001
    },
    {
        "id": 84,
        "datetime": "2021-03-02 00:53:54.364310",
        "current_token_price": 24.92,
        "total_value_locked": 4101931753.0138807,
        "min_apy": 0,
        "avg_apy": 34.39,
        "max_apy": 1917.16,
        "swap_cost": 45.523968,
        "staking_cost": 39.83347200000001
    },
    {
        "id": 85,
        "datetime": "2021-03-02 00:54:54.435924",
        "current_token_price": 24.99,
        "total_value_locked": 4102708464.490368,
        "min_apy": 0,
        "avg_apy": 34.39,
        "max_apy": 1917.16,
        "swap_cost": 45.523968,
        "staking_cost": 39.83347200000001
    },
    {
        "id": 86,
        "datetime": "2021-03-02 00:55:54.775997",
        "current_token_price": 24.99,
        "total_value_locked": 4103558362.4626975,
        "min_apy": 0,
        "avg_apy": 34.39,
        "max_apy": 1917.16,
        "swap_cost": 45.523968,
        "staking_cost": 39.83347200000001
    },
    {
        "id": 87,
        "datetime": "2021-03-02 00:56:55.368392",
        "current_token_price": 24.99,
        "total_value_locked": 4103051089.0518136,
        "min_apy": 0,
        "avg_apy": 34.39,
        "max_apy": 1917.16,
        "swap_cost": 45.523968,
        "staking_cost": 39.83347200000001
    },
    {
        "id": 88,
        "datetime": "2021-03-06 00:22:42.413162",
        "current_token_price": 27.34,
        "total_value_locked": 4040385696.1873097,
        "min_apy": 0,
        "avg_apy": 35.87,
        "max_apy": 723.7,
        "swap_cost": 35.813288,
        "staking_cost": 31.336627
    },
    {
        "id": 89,
        "datetime": "2021-03-06 00:22:55.252211",
        "current_token_price": 27.34,
        "total_value_locked": 4040385696.1873097,
        "min_apy": 0,
        "avg_apy": 35.87,
        "max_apy": 723.7,
        "swap_cost": 35.813288,
        "staking_cost": 31.336627
    },
    {
        "id": 90,
        "datetime": "2021-03-06 00:23:05.085380",
        "current_token_price": 27.34,
        "total_value_locked": 4040572755.1091266,
        "min_apy": 0,
        "avg_apy": 35.87,
        "max_apy": 723.7,
        "swap_cost": 35.813288,
        "staking_cost": 31.336627
    },
    {
        "id": 91,
        "datetime": "2021-03-06 00:23:15.376340",
        "current_token_price": 27.34,
        "total_value_locked": 4040536962.3452888,
        "min_apy": 0,
        "avg_apy": 35.87,
        "max_apy": 723.7,
        "swap_cost": 35.813288,
        "staking_cost": 31.336627
    },
    {
        "id": 92,
        "datetime": "2021-03-06 00:24:42.363206",
        "current_token_price": 27.27,
        "total_value_locked": 4035310228.70552,
        "min_apy": 0,
        "avg_apy": 35.87,
        "max_apy": 723.7,
        "swap_cost": 35.76307,
        "staking_cost": 31.292686250000003
    },
    {
        "id": 93,
        "datetime": "2021-03-06 00:24:51.644358",
        "current_token_price": 27.27,
        "total_value_locked": 4035409035.051036,
        "min_apy": 0,
        "avg_apy": 35.87,
        "max_apy": 723.7,
        "swap_cost": 35.76307,
        "staking_cost": 31.292686250000003
    }
]
