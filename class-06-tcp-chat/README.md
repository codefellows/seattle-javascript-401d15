401 JS -- class 06 OSI model, TCP protocol
===

## OSI Resources
* Skim [OSI model wiki]

## TCP Resources
* Watch [TCP connection walkthrough]
* Skim [TCP wiki]

## Learning Objectives

## Overview
#### OSI Model
The OSI model is a conceptual model for understanding the different systems that play a roles in networking computers. The OSI model is not a protocol or a standardization, Its just a conceptual framework for helping us talk about networking components and their roles. There are many protocols and services that subscribe to particular sections of the OSI model. However, there are also protocols and services that do not conform to a single section of the OSI model, and instead play more than one role.  

The "TCP/IP stack" that http is built on top of, does not follow the OSI model. It does not have components in the presentation, or session layers.   

* **Layer 7** Application  
The application layer contains process to process communication protocols used by hosts.   
 * `HTTP` - used by the world wide web
 * `IMAP` - used by email clients to retrieve e-mail
 * `POP` - used by email clients to retrieve e-mail
 * `FTP` - used to transfer files between computers
 * `SSH` - used for securely operating a computer over an unsecured network
 * `BitTorrent` - used for peer to peer file transfer
* **Layer 6** Presentation  
The presentation layer is responsible for formatting information for the application layer.  
  * string encoding
    * num bytes followed by data  
    * null terminated strings
  * data serialization like `JSON`, `XML`, and `TLV`
  * encryption
* **Layer 5** Session   
The session layer is responsible for opening, closing, and  managing end-user applications.  
 * `RPC` - Remote Procedure Call used to run subroutines on another computer
 * `NetBIOS` - allows applications on separate computers to communicate on a local area network
 * `ASP` - AppleTalk Session Layer is used request responses to commands, and to send async messages from a server to a client
* **Layer 4** Transport  
The transport layer is responsible for host to host communication services for applications.  
 * `TCP` - the Transmission Control Protocol is one of the main transport protocols of the Internet protocol suite.
 * `UDP` - the User Datagram Protocol uses a simple connectionless transmission model.
 * `uTP` -
* **Layer 3** Network  
The Network layer is responsible for packet forwarding.  
 * `IPv4/IPv6` - The Internet Protocol is responsible for delivering packets from source host to destination host
 * `ICMP` - The Internet Control Message Protocol is used to send messages to network devices like routers.
* **Layer 2** Data Link  
The Data Link layer is responsible for transferring data between adjacent networks.   
 * `Ethernet` - networking computers in local area networks
 * `IEEE 802.11` - wireless local area network  (wifi)
 * `PPP` - used to establish connection between two nodes on any network
* **Layer 1** Physical  
The Physical Layer consists of the networking hardware.
 * `Bluetooth` - wireless data over short distances
 * `USB` - physical usb port
 * `802.11 Physical Interface` - wifi hardware
 * `Ethernet Physical Interface` - ethernet hardware

# Transmission Control Protocol
* The TCP allows for connection oriented (stateful) transmission. (open connections with two way communication)
* TCP is used by the world wide web, FTP, SSH, E-mail, p2p sharing, and streaming media.
* The TCP protocol is optimized for accurate delivery rather than speed
* TCP segments data into packets and sends them across the network over IP
 * It keeps packets in order
 * It resends packets that get lost
 * It removes duplicate packets
 * It even tries to help maintain network congestion

<!--links -->
[OSI model wiki]: https://en.wikipedia.org/wiki/OSI_model
[TCP wiki]: https://en.wikipedia.org/wiki/Transmission_Control_Protocol
[TCP connection walkthrough]: https://www.youtube.com/watch?v=F27PLin3TV0
