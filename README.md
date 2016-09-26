# streams_secretary
A simple project that shows how to use readable and writeable streams

## Instructions
The purpose of this project is to help new node.js developers understand how to create and use readable and writable node.js streams. To use this project, run ```node input``` then type whatever you wish in the console. When you're done, type ```quit```. This will end the program. You can view the output in a ```file.txt``` file which will be auto created for you upon initial start. If the file already exists then new data will be appended to it.

### Explanation
When you run ```input.js``` it creates a readable stream which uses ```process.stdin``` as it's underlying data source. It pauses this resource and allows the user to input any data they wish from the terminal. The readable stream created when ```input.js``` is instantiated pipes its data to ```output.js```. ```output.js``` implements a writable stream which uses ```fs.createWriteStream``` as it's own underlying data destination. ```fs.createWriteStream``` is used to create ```file.txt``` if it doesn't already exist and any data which is sent to ```output.js``` is written to ```file.txt```.

### Purpose
The purpose of this simple project is to demonstarte how custom streams can be built and used, i decided to do this when i saw how 'silly' the contrived examples on the net were (even the ones on the node.js API) - these examples really didn't help me understand what was going on.

# TODO
1. Example readable stream that reads from a file.
2. Example writable stream that writes to a remote resource.
3. Example readable strem that reads froma remote resource.
4. Example writable stream that writes to the terminal.
5. More verbose explanation and step-by-step guide.
