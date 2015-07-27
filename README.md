# drakov-cluster

[![npm version](https://badge.fury.io/js/drakov-cluster.svg)](http://badge.fury.io/js/drakov-cluster)


Create a cluster of Drakov API servers
(https://www.npmjs.com/package/drakov)

`drakov-cluster -c <path/to/config/files> -p <starting default server port>`


**Configuration Files**

Configuration files are Javascript files that export a JSON object with valid Drakov configuration options.


**Default Starting Server Port**

This is the starting port to use if the `serverPort` configuration is not specified in the configuration file being loaded.


