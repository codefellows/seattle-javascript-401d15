401 JS -- class 04 Event Emitters, Buffers, and Bitmaps
===

## Event Emitter Resources
* [events api docs]

## Bitmap Resources
* Read [bitmap file format]
* Read  [node buffer api docs]
* Watch [endian and little endian]

## Learning Objectives
<!-- unordered list of learning objectives -->

## Overview
#### EventEmitter
* Much of the node APIs is built around events
* All objects that emit events in node are instances of the EventEmitter constructor
* EventEmitters are a great way to handle controlling async events
* functions can be registered as listeners for an event on instances of EventEmitters
* instances of EventEmitters can emit events and pass the listeners data
* EventEmitters do not throw errors if events are emitted and have no listeners to handle them
 * This can be a very powerful feature and is often used to implement "hooks" and "observables" in many libraries

#### Binary
* you've probably heard that all things in the computer are just a bunch of zeros and ones
 * its true :)
* since zeros and ones mean almost nothing to humans we have created rules to convert them in to meaningful information
* Integers, floating point numbers, characters are some of the basic things we can turn zeros and ones into
* the process for taking an integer, float, character, or etc. and turning them into zeros and one is called encoding
* the process for taking zeros and ones and turning them into an integer, float, character, or etc. is called decoding
* binary and hex work a lot like decimal
 * decimal is also called base 10
 * binary is also called base 2
 * hex is also called base 16
 * if you take each digit multiply it times its base to the power of its place, you get its value

```
HOW DECMAL WORKS...

places    43210
_______________
value     06974

6974 base 10 is the same as (6 * 10^3) + (9 * 10^2) + (7 * 10^1) + (8 * 10^0)
6974 base 10 is the same as (6 * 1000) + (9 * 100) + (7 * 10) + (8 * 1)
6974 base 10 is the same as (6000) + (900) + (70) + (8)
6974 base 10 is the same as 6974

----------------------------------------------------------------------

HOW BINARY WORKS

places    43210
_______________
value     01011

1010 base 2 is the same as (1 * 2^3) + (0 * 2^2) + (1 * 2^1) + (1 * 2^0)
1010 base 2 is the same as (1 * 8) + (0 * 4) + (1 * 2) + (1 * 1)
1010 base 2 is the same as (8) + (0) + (2) + (1)
1010 base 2 is the same as 11

----------------------------------------------------------------------

Hex is the same ...
```
* below is decimal hex binary conversion chart
``` text
DEC |HEX |BIN
--------------
0   |0   |0000
1   |1   |0001   
2   |2   |0010   
3   |3   |0011   
4   |4   |0100   
5   |5   |0101   
6   |6   |0110   
7   |7   |0111   
8   |8   |1000   
9   |9   |1001   
10  |a   |1010   
11  |b   |1011   
12  |c   |1100   
13  |d   |1101   
14  |e   |1110   
15  |f   |1111   
```
* to convert to floating points is a little takes the binary to decimal idea a little further by using it for scientific notation
* to convert to text there is an encoding called ascii which maps all characters to a corresponding number
 * run the command `man ascii` in your command line to see an ascii chart
* now days we have a character encoding called `utf8` that is an extension for ascii, that supports multiple languages

#### Buffers
Pure javascript is Unicode friendly but not nice to binary data. When dealing with TCP streams or the file system, it's necessary to deal with octet streams. node has a few ways to handle manipulating, consuming, and creating octet streams.
Raw dat is stored as instances of the Buffer class A buffer is similar to an array of integers, but corresponds to raw memory allocation outside the V8 heap. a Buffer cannot be resized.

The Buffer class is a global, making it very rare that one would need to ever require('buffer').

* A Buffer represents arrays of bytes
 * A byte is made of of 8 bits
 * A bit is a single one or zero
* Each byte in a buffer can be decoded as an integer, floating point number, or a string
* Integers and Floats come in different sizes 8bit, 16bit, 32bit
* Strings come in different encodings 'hex', 'utf8', 'base64' ...
* Buffers are often referred to as raw data, meaning just a bunch of zeros and ones
* Many of the Node APIs use buffers as the data type when dealing with input and output
* Your OS stores binary in one of two ways
 * `little endian` - most significant bit first
 * `big endian` - least significant bit first
* In a node **REPL** you can un `os.endianness()` to determine how your os stores bytes
 * `'LE'` == little endian
 * `'BE'` == big endian
* Make sure your using the methods that correspond to your systems **endianness**

###### Creating buffers
* ` new Buffer(size) ` allocates a new buffer of size octets(bytes)
* ` new Buffer(array) ` allocates a new buffer using an array of octets
* ` new Buffer(buffer) ` copies the passed buffer data onto a new Buffer instance
* ` new Buffer(str, *encoding) ` allocates a new buffer containing a giving string, defaults to utf8

###### buffer info
* ` Buffer.isBuffer(obj) ` test is obj is Buffer -> return boolean
* ` Buffer.isEncoding(encoding) ` test if the encoding is valid -> return boolean
* ` Buffer.byteLength(string, *encoding) ` gives the actual byte length of a string. default encoding = utf8
* ` buf.length ` return the size of the buffer in bytes.

###### comparing buffers
* ` buf.equals(otherBuffer) ` returns boolean of weather this and other buffer have the same bytes
* ` buf.compare(otherbuffer) ` returns a number indicating whether this comes before or after or is the same as the other buffer in a sort

###### copying, slice, and concat
* ` buf.copy( targetBuffer, *targetStart, *sourceStart, *sourceEnd)`
 * create a new buffer
* ` buf.slice(*start, *end) `
 * create a  a new buffer witch references the same memory as the old by offset and cropped by start, end
* ` Buffer.concat(list, *totalLength) ` concatenates the buffers in the list

###### indexing a buffer
 * `buf[index]` get and set the octet at index (just like an array)

###### fill a buffer
* ` buff.fill(value, *offset, *end) ` fills the buffer with the specified value
 * **offset** - number of bytes into array, Defaults: 0
 * **end** - number of bytes into array to stop, Defaults, buffer.length

###### writing integers
* ` writeUInt16LE(value, offset, *noAssert)`
* ` writeUInt32LE(value, offset, *noAssert)`
* ` writeUInt8(value, offset, *noAssert)`
* ` writeInt16LE(value, offset, *noAssert)`
* ` writeInt32LE(value, offset, *noAssert)`
* ` writeInt8(value, offset, *noAssert)`
 * **value** - Number to write
 * **offset** - number of bytes into array
 * **noAssert** - Boolean,  set to true to skip validation off offset

###### reading integers
* `readUInt16LE(offset, *noAssert)`
* `readUInt16BE(offset, *noAssert)`
* `readUInt32LE(offset, *noAssert)`
* `readUInt32BE(offset, *noAssert)`
* `readUInt8(offset, *noAssert)`
* `readInt16LE(offset, *noAssert)`
* `readInt16BE(offset, *noAssert)`
* `readInt32LE(offset, *noAssert)`
* `readInt32BE(offset, *noAssert)`
* `readInt8(offset, *noAssert)`
 * **offset** - number of bytes into array
 * **noAssert** - Boolean,  set to true to skip offset validation


###### writing strings
 * ``` buf.write(string, *offset, *length, *encoding)```
 * offset defaults to 0
 * encoding defaults to utf8
 * if buffer did not contain enough space to fit the entire string it will write a partial amount of the string.
 * length defaults to buffer.length

###### reading strings
* ``` buf.toString(*encoding, *start, *end) ``` decodes and returns a string from buffer data
 * **encoding** - String, Default: 'utf8'
 * **start** - Number, Default: 0
 * **end** - Number, Default: buffer.length
 * Converting between buffers and strings requires a specific encoding
  * `acii` - for 7 bit ASCII data
  * `utf8` - for multibyte encoded unicode characters
  * `utf16le` - 2 or 4 byte, little endian unicode
  * `ucs2` - alias of utf16le
  * `base64` - Base64 string encoding
  * `hex` - encode each byte as two hexadecimal characters

<!--links -->
[events api docs]: https://nodejs.org/api/events.html
[bitmap file format]: https://en.wikipedia.org/wiki/BMP_file_format
[node buffer api docs]: https://nodejs.org/api/buffer.html
[endian and little endian]: https://www.youtube.com/watch?v=B50mNoVw21k
