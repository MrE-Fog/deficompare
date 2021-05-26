import json
from typing import Union
import re

import requests


def retrieve_json(url) -> Union[list, dict, str, int, float, bool]:
    """May return a list of json objects or an object as a python dictionary,
    or any other data type depending on the called URL."""
    response = requests.request("GET", url)
    return response.json()


def webscrape(url, pattern) -> Union[list, dict, str, int, float, bool]:
    """May return a list of json objects or an object as a python dictionary,
    or any other data type depending on the called URL."""
    response = requests.request("GET", url).text
    print(response)
    match = re.match(pattern, response)
    print(match)
    return match.group()


def retrieve_json_as_string(url) -> str:
    """A basic json dump."""
    response = requests.request("GET", url)
    return json.dumps(response.json(), sort_keys=True, indent=4)


def print_red(text):
    print("\033[91m {}\033[00m".format(text))
