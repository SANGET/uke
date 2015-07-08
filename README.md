## Uke
------------

### Running on the production server, for listening on the specified port and executes the specified configuration shells.


## Usage
--------

#### Global Installation
------------------------

Running on any path

```
npm install push-hook -g
```

#### Running
------------

```
uke -port 6666 -path /your-config-path
```

#### Options
------------

##### -port
-----------

specified port. Default is `2000`.


##### -path
-----------

specified configurations path. Default is current directory.


Service will listen the URL *http://yourDomain:port/projectName*

The value of this parameter corresponds to the configuration file name, and execute the shell script


#### Configuration files

Create json configuration corresponding project name in the specified configuration path.

##### Example

_yourConfig.json_

```
{
  "shells": [
    "cd /your-project-path",
    "git pull",
    "npm install"
    ...
  ]
}
```
