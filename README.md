## webhook

------------

### Running on the production server, for listening on the specified port and executes the specified configuration shells.


## Usage

--------

#### Global Installation

------------------------

Running on any path

```
npm install uke -g
```

#### Running as Administrator

-----------------------------

```
sudo uke -port 6666 -path /your-config-path
```

#### Options

------------

##### -port

specified port. Default is `2000`.

##### -path

specified configurations path. Default is current directory.

Service will listen the URL *http://yourDomain:port/projectName*

The value of this parameter corresponds to the configuration file name, and execute the shell script

#### shells

Create `.sh` configuration corresponding project name in the specified configuration path.

##### Example

_yourShell.sh_

```shell
echo "Executing env: /Users/SANGET/Github/uke"
cd /Users/SANGET/Github/uke
git pull origin
npm install
```
