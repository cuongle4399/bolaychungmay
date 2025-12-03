const quizData = [
    {
      id: 1,
      question: "A DHCP-enabled client PC has just booted. During which two steps will the client PC use broadcast messages when communicating with a DHCP server? (Choose two.)",
      type: "multi",
      options: [
        { text: "DHCPDISCOVER", correct: true },
        { text: "DHCPACK", correct: false },
        { text: "DHCPOFFER", correct: false },
        { text: "DHCPREQUEST", correct: true },
        { text: "DHCPNAK", correct: false }
      ]
    },
    {
      id: 2,
      question: "An administrator issues the commands:<br><pre>Router(config)# interface g0/1<br>Router(config-if)# ip address dhcp</pre><br>What is the administrator trying to achieve?",
      type: "single",
      options: [
        { text: "configuring the router to act as a DHCPv4 server", correct: false },
        { text: "configuring the router to obtain IP parameters from a DHCPv4 server", correct: true },
        { text: "configuring the router to act as a relay agent", correct: false },
        { text: "configuring the router to resolve IP address conflicts", correct: false }
      ]
    },
    {
      id: 3,
      question: "When a client is requesting an initial address lease from a DHCP server, why is the DHCPREQUEST message sent as a broadcast?",
      type: "single",
      options: [
        { text: "The client does not yet know the IP address of the DHCP server that sent the offer.", correct: false },
        { text: "The DHCP server may be on a different subnet, so the request must be sent as a broadcast.", correct: false },
        { text: "The client does not have a MAC address assigned yet, so it cannot send a unicast message at Layer 2.", correct: false },
        { text: "The client may have received offers from multiple servers, and the broadcast serves to implicitly decline those other offers.", correct: true }
      ]
    },
    {
      id: 4,
      question: "Which DHCP IPv4 message contains the following information?<br>Destination address: 255.255.255.255<br>Client IPv4 address: 0.0.0.0<br>Default gateway address: 0.0.0.0<br>Subnet mask: 0.0.0.0",
      type: "single",
      options: [
        { text: "DHCPACK", correct: false },
        { text: "DHCPDISCOVER", correct: true },
        { text: "DHCPOFFER", correct: false },
        { text: "DHCPREQUEST", correct: false }
      ]
    },
    {
      id: 5,
      question: "Place the options in the following order:",
      type: "list",
      options: [
        { text: "a client initiating a message to find a DHCP server – DHCPDISCOVER", correct: true },
        { text: "a DHCP server responding to the initial request by a client – DHCPOFFER", correct: true },
        { text: "the client accepting the IP address provided by the DHCP server – DHCPREQUEST", correct: true },
        { text: "the DHCP server confirming that the lease has been accepted – DHCPACK", correct: true }
      ]
    },
    {
      id: 6,
      question: "Which protocol automates assignment of IP addresses on a network, and which port number does it use? (Choose two.)",
      type: "multi",
      options: [
        { text: "DHCP", correct: true },
        { text: "DNS", correct: false },
        { text: "SMB", correct: false },
        { text: "53", correct: false },
        { text: "67", correct: true },
        { text: "80", correct: false }
      ]
    },
    {
      id: 7,
      question: "Refer to the exhibit. PC1 is configured to obtain a dynamic IP address from the DHCP server. PC1 has been shut down for two weeks. When PC1 boots and tries to request an available IP address, which destination IP address will PC1 place in the IP header?<br><img src='https://itexamanswers.net/wp-content/uploads/2019/12/i207537v1n2_207537.png'>",
      type: "single",
      options: [
        { text: "192.168.1.1", correct: false },
        { text: "192.168.1.255", correct: false },
        { text: "255.255.255.255", correct: true },
        { text: "192.168.1.8", correct: false }
      ]
    },
    {
      id: 8,
      question: "Which message does an IPv4 host use to reply when it receives a DHCPOFFER message from a DHCP server?",
      type: "single",
      options: [
        { text: "DHCPOFFER", correct: false },
        { text: "DHCPDISCOVER", correct: false },
        { text: "DHCPREQUEST", correct: true },
        { text: "DHCPACK", correct: false }
      ]
    },
    {
      id: 9,
      question: "Which command, when issued in the interface configuration mode of a router, enables the interface to acquire an IPv4 address automatically from an ISP, when that link to the ISP is enabled?",
      type: "single",
      options: [
        { text: "service dhcp", correct: false },
        { text: "ip address dhcp", correct: true },
        { text: "ip helper-address", correct: false },
        { text: "ip dhcp pool", correct: false }
      ]
    },
    {
      id: 10,
      question: "Which kind of message is sent by a DHCP client when its IP address lease has expired?​",
      type: "single",
      options: [
        { text: "a DHCPDISCOVER unicast message​", correct: false },
        { text: "a DHCPREQUEST broadcast message​", correct: false },
        { text: "a DHCPREQUEST unicast message​", correct: true },
        { text: "a DHCPDISCOVER broadcast message", correct: false }
      ]
    },
    {
      id: 11,
      question: "A host PC is attempting to lease an address through DHCP. What message is sent by the server to let the client know it is able to use the provided IP information?",
      type: "single",
      options: [
        { text: "DHCPDISCOVER", correct: false },
        { text: "DHCPOFFER", correct: false },
        { text: "DHCPREQUEST", correct: false },
        { text: "DHCPACK", correct: true },
        { text: "DHCPNACK", correct: false }
      ]
    },
    {
      id: 12,
      question: "What is one indication that a Windows computer did not receive an IPv4 address from a DHCP server?",
      type: "single",
      options: [
        { text: "The computer cannot ping 127.0.0.1.", correct: false },
        { text: "The computer receives an IP address that starts with 169.254.", correct: true },
        { text: "Windows displays a DHCP timeout message.", correct: false },
        { text: "The computer cannot ping other devices on the same network with IP addresses in the 169.254.0.0/16 range.", correct: false }
      ]
    },
    {
      id: 13,
      question: "Which DHCPv4 message will a client send to accept an IPv4 address that is offered by a DHCP server?",
      type: "single",
      options: [
        { text: "broadcast DHCPACK", correct: false },
        { text: "broadcast DHCPREQUEST", correct: true },
        { text: "unicast DHCPACK", correct: false },
        { text: "unicast DHCPREQUEST", correct: false }
      ]
    },
    {
      id: 14,
      question: "A small coffee shop is offering free Wi-Fi to customers. The network includes a wireless router and a DSL modem that is connected to the local phone company. What method is typically used to configure the connection to the phone company?",
      type: "single",
      options: [
        { text: "Set the WAN connection in the wireless router as a DHCP client.", correct: true },
        { text: "Set the connection between the wireless router and the DSL modem as a private IP network.", correct: false },
        { text: "Set the DSL modem as a DHCP client to get a public IP address from the wireless router.", correct: false },
        { text: "Set the DSL modem as a DHCP client to the phone company and a DHCP server for the internal connection.", correct: false }
      ]
    },
    {
      id: 15,
      question: "A company uses DHCP to manage IP address deployment for employee workstations. The IT department deploys multiple DHCP servers in the data center and uses DHCP relay agents to facilitate the DHCP requests from workstations. Which two UDP ports are used to forward DHCP traffic? (Choose two.)",
      type: "multi",
      options: [
        { text: "23", correct: false },
        { text: "53", correct: false },
        { text: "67", correct: true },
        { text: "68", correct: true },
        { text: "80", correct: false }
      ]
    },
    {
      id: 16,
      question: "A client device on an Ethernet segment needs an IP address in order to communicate on the network. A DHCP server with IP address 192.168.1.1 has been configured and enabled on the network. How will a client device obtain a usable IP address for this network?",
      type: "single",
      options: [
        { text: "Send a DHCPACK packet to the default gateway address.", correct: false },
        { text: "Use a statically configured IP address from the pool of IP addresses that is offered by the DHCP server.", correct: false },
        { text: "Send a DHCPDISCOVER message to physical address FF-FF-FF-FF-FF-FF.", correct: true },
        { text: "Send a DHCPREQUEST packet to IP address 255.255.255.255.", correct: false }
      ]
    },
    {
      id: 17,
      question: "What is an advantage of configuring a Cisco router as a relay agent?",
      type: "single",
      options: [
        { text: "It can provide relay services for multiple UDP services.", correct: true },
        { text: "It reduces the response time from a DHCP server.", correct: false },
        { text: "It can forward both broadcast and multicast messages on behalf of clients.", correct: false },
        { text: "It will allow DHCPDISCOVER messages to pass without alteration.", correct: false }
      ]
    },
    {
      id: 18,
      question: "Which statement is true about DHCP operation?​",
      type: "single",
      options: [
        { text: "When a device that is configured to use DHCP boots, the client broadcasts a DHCPDISCOVER message to identify any available DHCP servers on the network.​", correct: true },
        { text: "A client must wait for lease expiration before it sends another DHCPREQUEST message.​", correct: false },
        { text: "If the client receives several DHCPOFFER messages from different servers, it sends a unicast DHCPREQUEST message to the server from which it chooses to obtain the IP information.", correct: false },
        { text: "The DHCPDISCOVER message contains the IP address and subnet mask to be assigned, the IP address of the DNS server, and the IP address of the default gateway.​", correct: false }
      ]
    },
    {
      id: 19,
      question: "Order the DHCP message types as they would occur between a DHCP client and a DHCP server.<br><img src='https://itexamanswers.net/wp-content/uploads/2019/12/349.jpg'>",
      type: "list",
      options: [
        { text: "DHCPDISCOVER -> DHCPOFFER -> DHCPREQUEST -> DHCPACK", correct: true }
      ]
    },
    {
      id: 20,
      question: "A network administrator configures a router to send RA messages with M flag as 0 and O flag as 1. Which statement describes the effect of this configuration when a PC tries to configure its IPv6 address?",
      type: "single",
      options: [
        { text: "It should contact a DHCPv6 server for the prefix, the prefix-length information, and an interface ID that is both random and unique.", correct: false },
        { text: "It should use the information that is contained in the RA message and contact a DHCPv6 server for additional information.", correct: true },
        { text: "It should use the information that is contained in the RA message exclusively.", correct: false },
        { text: "It should contact a DHCPv6 server for all the information that it needs.", correct: false }
      ]
    },
    {
      id: 21,
      question: "Refer to the exhibit. What should be done to allow PC-A to receive an IPv6 address from the DHCPv6 server?<br><img src='https://itexamanswers.net/wp-content/uploads/2019/12/i210917v1n1_Question-8.png'>",
      type: "single",
      options: [
        { text: "Add the ipv6 dhcp relay command to interface Fa0/0.", correct: true },
        { text: "Change the ipv6 nd managed-config-flag command to ipv6 nd other-config-flag.", correct: false },
        { text: "Configure the ipv6 nd managed-config-flag command on interface Fa0/1.", correct: false },
        { text: "Add the IPv6 address 2001:DB8:1234:5678::10/64 to the interface configuration of the DHCPv6 server.", correct: false }
      ]
    },
    {
      id: 22,
      question: "Refer to the exhibit. A network administrator is implementing the stateless DHCPv6 operation for the company. Clients are configuring IPv6 addresses as expected. However, the clients are not getting the DNS server address and the domain name information configured in the DHCP pool. What could be the cause of the problem?<br><img src='https://itexamanswers.net/wp-content/uploads/2019/12/i222841v1n1_210900.png'>",
      type: "single",
      options: [
        { text: "The DNS server address is not on the same network as the clients are on.", correct: false },
        { text: "The router is configured for SLAAC operation.", correct: true },
        { text: "The GigabitEthernet interface is not activated.", correct: false },
        { text: "The clients cannot communicate with the DHCPv6 server, evidenced by the number of active clients being 0.", correct: false }
      ]
    },
    {
      id: 23,
      question: "Question as presented:<br>A stateless DHCPv6 client would send a DHCPv6 INFORMATION-REQUEST message as step 3 in the process.",
      type: "text",
      options: [
         { text: "Statement is Correct as presented in source.", correct: true}
      ]
    },
    {
      id: 24,
      question: "A company uses the SLAAC method to configure IPv6 addresses for the employee workstations. Which address will a client use as its default gateway?​",
      type: "single",
      options: [
        { text: "the global unicast address of the router interface that is attached to the network", correct: false },
        { text: "the unique local address of the router interface that is attached to the network", correct: false },
        { text: "the all-routers multicast address", correct: false },
        { text: "the link-local address of the router interface that is attached to the network", correct: true }
      ]
    },
    {
      id: 25,
      question: "Refer to the exhibit. A network administrator is configuring a router for DHCPv6 operation. Which conclusion can be drawn based on the commands?<br><img src='https://itexamanswers.net/wp-content/uploads/2019/12/i210893v1n1_210893.png'>",
      type: "single",
      options: [
        { text: "The router is configured for stateful DHCPv6 operation, but the DHCP pool configuration is incomplete.", correct: false },
        { text: "The DHCPv6 server name is ACAD_CLASS.", correct: false },
        { text: "Clients would configure the interface IDs above 0010.", correct: false },
        { text: "The router is configured for stateless DHCPv6 operation.", correct: true }
      ]
    },
    {
      id: 26,
      question: "A network administrator is analyzing the features that are supported by different first-hop router redundancy protocols. Which statement describes a feature that is associated with HSRP?",
      type: "single",
      options: [
        { text: "HSRP uses active and standby routers.", correct: true },
        { text: "HSRP is nonproprietary.", correct: false },
        { text: "It allows load balancing between a group of redundant routers.", correct: false },
        { text: "It uses ICMP messages in order to assign the default gateway to hosts.", correct: false }
      ]
    },
    {
      id: 27,
      question: "Refer to the exhibit. What protocol can be configured on gateway routers R1 and R2 that will allow traffic from the internal LAN to be load balanced across the two gateways to the Internet?<br><img src='https://itexamanswers.net/wp-content/uploads/2019/12/i216443v1n1_216443.png'>",
      type: "single",
      options: [
        { text: "GLBP", correct: true },
        { text: "PVST+", correct: false },
        { text: "PVST", correct: false },
        { text: "STP", correct: false }
      ]
    },
    {
      id: 28,
      question: "Refer to the exhibit. A network engineer is troubleshooting host connectivity on a LAN that uses a first hop redundancy protocol. Which IPv4 gateway address should be configured on the host?<br><img src='https://itexamanswers.net/wp-content/uploads/2019/12/i216427v1n1_216427v2.png'>",
      type: "single",
      options: [
        { text: "192.168.2.0", correct: false },
        { text: "192.168.2.1", correct: false },
        { text: "192.168.2.2", correct: false },
        { text: "192.168.2.100", correct: true }
      ]
    },
    {
      id: 29,
      question: "Refer to the exhibit. Which destination MAC address is used when frames are sent from the workstation to the default gateway?<br><img src='https://itexamanswers.net/wp-content/uploads/2019/12/i223091v1n1_223091.png'>",
      type: "single",
      options: [
        { text: "MAC address of the virtual router", correct: true },
        { text: "MAC address of the standby router", correct: false },
        { text: "MAC addresses of both the forwarding and standby routers", correct: false },
        { text: "MAC address of the forwarding router", correct: false }
      ]
    },
    {
      id: 30,
      question: "Question as presented:<br>Hot Standby Router Protocol (HSRP) is a Cisco-proprietary protocol that is designed to allow for transparent failover of a first-hop IPv4 device.",
      type: "text",
      options: [
        { text: "Statement is Correct as presented in source.", correct: true}
      ]
    },
    {
      id: 31,
      question: "Which FHRP implementation is a Cisco-proprietary protocol that suppports IPv4 load sharing?",
      type: "single",
      options: [
        { text: "IRDP", correct: false },
        { text: "GLBP", correct: true },
        { text: "VRRPv3", correct: false },
        { text: "GLBP for IPv6", correct: false }
      ]
    },
    {
      id: 32,
      question: "The address pool of a DHCP server is configured with 10.92.71.0/25. The network administrator reserves 8 IP addresses for servers. How many IP addresses are left in the pool to be assigned to other hosts?",
      type: "single",
      options: [
        { text: "122", correct: false },
        { text: "118", correct: true },
        { text: "119", correct: false },
        { text: "108", correct: false },
        { text: "116", correct: false }
      ]
    },
    {
      id: 33,
      question: "Question as presented:<br>The broadcast DHCPDISCOVER message finds DHCPv4 servers on the network. When the DHCPv4 server receives a DHCPDISCOVER message, it reserves an available IPv4 address to lease to the client and sends the unicast DHCPOFFER message to the requesting client. When the client receives the DHCPOFFER from the server, it sends back a DHCPREQUEST. On receiving the DHCPREQUEST message the server replies with a unicast DHCPACK message. DHCPREPLY and DHCPINFORMATION-REQUEST are DHCPv6 messages.",
      type: "text",
      options: [
        { text: "Statement is Correct as presented in source.", correct: true}
      ]
    },
    {
      id: 34,
      question: "After a host has generated an IPv6 address by using the DHCPv6 or SLAAC process, how does the host verify that the address is unique and therefore usable?",
      type: "single",
      options: [
        { text: "The host sends an ICMPv6 echo request message to the DHCPv6 or SLAAC-learned address and if no reply is returned, the address is considered unique.", correct: false },
        { text: "The host sends an ICMPv6 neighbor solicitation message to the DHCP or SLAAC-learned address and if no neighbor advertisement is returned, the address is considered unique.", correct: true },
        { text: "The host checks the local neighbor cache for the learned address and if the address is not cached, it it considered unique.", correct: false },
        { text: "The host sends an ARP broadcast to the local link and if no hosts send a reply, the address is considered unique.", correct: false }
      ]
    },
    {
      id: 35,
      question: "Which statement describes HSRP?​",
      type: "single",
      options: [
        { text: "It is used within a group of routers for selecting an active device and a standby device to provide gateway services to a LAN.", correct: true },
        { text: "It uses ICMP to allow IPv4 hosts to locate routers that provide IPv4 connectivity to remote IP networks.​", correct: false },
        { text: "If the virtual router master fails, one router is elected as the virtual router master with the other routers acting as backups.", correct: false },
        { text: "It is an open standard protocol.", correct: false }
      ]
    },
    {
      id: 36,
      question: "Open the PT Activity. Perform the tasks in the activity instructions and then answer the question.<br><img src='https://itexamanswers.net/wp-content/uploads/2019/12/2020-03-31_170332.jpg'><br>What is the keyword that is displayed on www.netacad.com?",
      type: "single",
      options: [
        { text: "DHCP", correct: false },
        { text: "switch", correct: false },
        { text: "Router", correct: true },
        { text: "networking", correct: false },
        { text: "Cisco", correct: false },
        { text: "IPv6", correct: false }
      ]
    },
    {
      id: 37,
      question: "Match each DHCP message type with its description. (Not all options are used.)<br><img src='https://itexamanswers.net/wp-content/uploads/2019/12/2020-01-20_231506.jpg'>",
      type: "list",
      options: [
        { text: "a client initiating a message to find a DHCP server – DHCPDISCOVER", correct: true },
        { text: "a DHCP server responding to the initial request by a client – DHCPOFFER", correct: true },
        { text: "the client accepting the IP address provided by the DHCP server – DHCPREQUEST", correct: true },
        { text: "the DHCP server confirming that the lease has been accepted – DHCPACK", correct: true }
      ]
    },
    {
      id: 38,
      question: "Match the purpose with its DHCP message type. (Not all options are used.)<br><img src='https://itexamanswers.net/wp-content/uploads/2019/12/2020-01-20_232028.jpg'>",
      type: "list",
      options: [
        { text: "DHCPDISCOVER - identify any DHCP servers", correct: true },
        { text: "DHCPOFFER - server offers a lease", correct: true },
        { text: "DHCPREQUEST - identify specific server and lease", correct: true },
        { text: "DHCPACK - finalize successful lease", correct: true }
      ]
    },
    {
      id: 39,
      question: "Match the DHCP message types to the order of the stateful DHCPv6 process when a client first connects to an IPv6 network.<br><img src='https://itexamanswers.net/wp-content/uploads/2019/12/2024-10-08_154259.jpg'>",
      type: "list",
      options: [
        { text: "Step 1: DHCPv6 SOLICIT", correct: true },
        { text: "Step 2: DHCPv6 ADVERTISE", correct: true },
        { text: "Step 3: DHCPv6 REQUEST", correct: true },
        { text: "Step 4: DHCPv6 REPLY", correct: true }
      ]
    },
    {
      id: 40,
      question: "Match the step number to the sequence of stages that occur during the HSRP failover process.<br><img src='https://itexamanswers.net/wp-content/uploads/2019/12/2024-10-08_154407.jpg'>",
      type: "list",
      options: [
        { text: "Step 1: The forwarding router fails.", correct: true },
        { text: "Step 2: The standby router stops seeing hello messages from the forwarding router.", correct: true },
        { text: "Step 3: The standby router assumes the role of the forwarding router.", correct: true },
        { text: "Step 4: The new forwarding router assumes both the IP and MAC addresses of the virtual router.", correct: true }
      ]
    },
    {
      id: 41,
      question: "Match the FHRP protocols to the appropriate description.<br><img src='https://itexamanswers.net/wp-content/uploads/2019/12/2024-10-08_154524.jpg'>",
      type: "list",
      options: [
        { text: "HSRP: A Cisco proprietary FHRP that provides redundancy through use of an active device and standby device", correct: true },
        { text: "VRRP: An open standard FHRP that provides redundancy through use of a virtual routers master and one or more backups", correct: true },
        { text: "GLBP: A Cisco proprietary FHRP that provides load sharing in addition to redundancy", correct: true }
      ]
    },
    {
      id: 42,
      question: "Match the DHCP message types to the order of the DHCPv4 process.<br><img src='https://itexamanswers.net/wp-content/uploads/2019/12/2024-10-08_153922.jpg'>",
      type: "list",
      options: [
        { text: "Step 1: DHCPDISCOVER", correct: true },
        { text: "Step 2: DHCPOFFER", correct: true },
        { text: "Step 3: DHCPREQUEST", correct: true },
        { text: "Step 4: DHCPACK", correct: true }
      ]
    },
    {
      id: 43,
      question: "The address pool of a DHCP server is configured with 192.168.234.0/27. The network administrator reserves 22 IP addresses for IP phones. How many IP addresses are left in the pool to be assigned to other hosts?",
      type: "single",
      options: [
        { text: "10", correct: false },
        { text: "0", correct: false },
        { text: "8", correct: true },
        { text: "21", correct: false },
        { text: "18", correct: false }
      ]
    },
    {
      id: 44,
      question: "A company uses DHCP servers to dynamically assign IPv4 addresses to employee workstations. The address lease duration is set as 5 days. An employee returns to the office after an absence of one week. When the employee boots the workstation, it sends a message to obtain an IP address. Which Layer 2 and Layer 3 destination addresses will the message contain?",
      type: "single",
      options: [
        { text: "both MAC and IPv4 addresses of the DHCP server", correct: false },
        { text: "FF-FF-FF-FF-FF-FF and IPv4 address of the DHCP server", correct: false },
        { text: "FF-FF-FF-FF-FF-FF and 255.255.255.255", correct: true },
        { text: "MAC address of the DHCP server and 255.255.255.255", correct: false }
      ]
    },
    {
      id: 45,
      question: "Which command will allow a network administrator to check the IP address that is assigned to a particular MAC address?",
      type: "single",
      options: [
        { text: "Router# show running-config I section_dhcp", correct: false },
        { text: "Router# show ip dhcp server statistics", correct: false },
        { text: "Router# show ip dhcp binding", correct: true },
        { text: "Router# show ip dhcp pool", correct: false }
      ]
    },
    {
      id: 46,
      question: "What is the reason that an ISP commonly assigns a DHCP address to a wireless router in a SOHO environment?",
      type: "single",
      options: [
        { text: "better network performance", correct: false },
        { text: "better connectivity", correct: false },
        { text: "easy IP address management", correct: true },
        { text: "easy configuration on ISP firewall", correct: false }
      ]
    },
    {
      id: 47,
      question: "What information can be verified through the show ip dhcp binding command?",
      type: "single",
      options: [
        { text: "the IPv4 addresses that are assigned to hosts by the DHCP server", correct: true },
        { text: "that DHCPv4 discover messages are still being received by the DHCP server", correct: false },
        { text: "the IPv4 addresses that have been excluded from the DHCPv4 pool", correct: false },
        { text: "the number of IP addresses remaining in the DHCP pool", correct: false }
      ]
    },
    {
      id: 48,
      question: "What is the result of a network technician issuing the command ip dhcp excluded-address 10.0.15.1 10.0.15.15 on a Cisco router?",
      type: "single",
      options: [
        { text: "The Cisco router will exclude only the 10.0.15.1 and 10.0.15.15 IP addresses from being leased to DHCP clients.", correct: false },
        { text: "The Cisco router will exclude 15 IP addresses from being leased to DHCP clients.", correct: true },
        { text: "The Cisco router will automatically create a DHCP pool using a /28 mask.", correct: false },
        { text: "The Cisco router will allow only the specified IP addresses to be leased to clients.", correct: false }
      ]
    },
    {
      id: 49,
      question: "Match the descriptions to the corresponding DHCPv6 server type. (Not all options are used.)<br><img src='https://itexamanswers.net/wp-content/uploads/2019/12/2020-01-22_235504.jpg'>",
      type: "list",
      options: [
        { text: "See Image for correct matching logic", correct: true }
      ]
    },
    {
      id: 50,
      question: "Refer to the exhibit. Based on the output that is shown, what kind of IPv6 addressing is being configured?<br><img src='https://itexamanswers.net/wp-content/uploads/2019/12/CCNA-2-v7-Modules-7-9-Available-and-Reliable-Networks-Exam-Answers-50.png'>",
      type: "single",
      options: [
        { text: "stateless DHCPv6", correct: true },
        { text: "SLAAC", correct: false },
        { text: "static link-local", correct: false },
        { text: "stateful DHCPv6", correct: false }
      ]
    },
    {
      id: 51,
      question: "Which FHRP implementation is a Cisco-proprietary protocol that suppports IPv6 load balancing?",
      type: "single",
      options: [
        { text: "GLBP", correct: false },
        { text: "GLBP for IPv6", correct: true },
        { text: "VRRPv3", correct: false },
        { text: "VRRPv2", correct: false }
      ]
    },
    {
      id: 52,
      question: "Which set of commands will configure a router as a DHCP server that will assign IPv4 addresses to the 192.168.100.0/23 LAN while reserving the first 10 and the last addresses for static assignment?",
      type: "single",
      options: [
        { text: "ip dhcp excluded-address 192.168.100.1 192.168.100.9<br>ip dhcp excluded-address 192.168.101.254<br>ip dhcp pool LAN-POOL-100<br>ip network 192.168.100.0 255.255.254.0<br>ip default-gateway 192.168.100.1", correct: false },
        { text: "dhcp pool LAN-POOL-100<br>ip dhcp excluded-address 192.168.100.1 192.168.100.9<br>ip dhcp excluded-address 192.168.100.254<br>network 192.168.100.0 255.255.254.0<br>default-router 192.168.101.1", correct: false },
        { text: "ip dhcp excluded-address 192.168.100.1 192.168.100.10<br>ip dhcp excluded-address 192.168.100.254<br>ip dhcp pool LAN-POOL-100<br>network 192.168.100.0 255.255.255.0<br>ip default-gateway 192.168.100.1", correct: false },
        { text: "ip dhcp excluded-address 192.168.100.1 192.168.100.10<br>ip dhcp excluded-address 192.168.101.254<br>ip dhcp pool LAN-POOL-100<br>network 192.168.100.0 255.255.254.0<br>default-router 192.168.100.1", correct: true }
      ]
    },
    {
      id: 53,
      question: "What is a result when the DHCP servers are not operational in a network?",
      type: "single",
      options: [
        { text: "Workstations are assigned with the IP address 127.0.0.1.", correct: false },
        { text: "Workstations are assigned with IP addresses in the 10.0.0.0/8 network.", correct: false },
        { text: "Workstations are assigned with IP addresses in the 169.254.0.0/16 network.", correct: true },
        { text: "Workstations are assigned with the IP address 0.0.0.0.", correct: false }
      ]
    },
    {
      id: 54,
      question: "A company uses the method SLAAC to configure IPv6 addresses for the workstations of the employees. A network administrator configured the IPv6 address on the LAN interface of the router. The interface status is UP. However, the workstations on the LAN segment did not obtain the correct prefix and prefix length. What else should be configured on the router that is attached to the LAN segment for the workstations to obtain the information?​",
      type: "single",
      options: [
        { text: "R1(config)# ipv6 dhcp pool", correct: false },
        { text: "R1(config-if)# ipv6 enable", correct: false },
        { text: "R1(config)# ipv6 unicast-routing", correct: true },
        { text: "R1(config-if)# ipv6 nd other-config-flag", correct: false }
      ]
    },
    {
      id: 55,
      question: "Which FHRP implementation is a nonproprietary protocol which relies on ICMP to provide IPv4 redundancy?",
      type: "single",
      options: [
        { text: "VRRPv3", correct: false },
        { text: "GLBP for IPv6", correct: false },
        { text: "IRDP", correct: true },
        { text: "GLBP", correct: false }
      ]
    },
    {
      id: 56,
      question: "Refer to the exhibit. PC-A is unable to receive an IPv6 address from the stateful DHCPv6 server. What is the problem?<br><img src='https://itexamanswers.net/wp-content/uploads/2019/12/download.png'>",
      type: "single",
      options: [
        { text: "The ipv6 dhcp relay command should be applied to interface Gig0/0.", correct: true },
        { text: "The ipv6 nd managed-config-flag should be applied to interface Gig0/1.", correct: false },
        { text: "The ipv6 dhcp relay command should use the link-local address of the DHCP server.", correct: false },
        { text: "The ipv6 nd managed-config-flag command should be ipv6 nd other-config-flag .", correct: false }
      ]
    },
    {
      id: 57,
      question: "Refer to the exhibit. A network administrator is configuring a router as a DHCPv6 server. The administrator issues a show ipv6 dhcp pool command to verify the configuration. Which statement explains the reason that the number of active clients is 0?<br><img src='https://itexamanswers.net/wp-content/uploads/2016/02/i210895v1n1_210895.jpg'>",
      type: "single",
      options: [
        { text: "The default gateway address is not provided in the pool.", correct: false },
        { text: "No clients have communicated with the DHCPv6 server yet.", correct: false },
        { text: "The IPv6 DHCP pool configuration has no IPv6 address range specified.", correct: false },
        { text: "The state is not maintained by the DHCPv6 server under stateless DHCPv6 operation.", correct: true }
      ]
    },
    {
      id: 58,
      question: "Which FHRP implementation is Cisco-proprietary and permits only one router in a group to forward IPv6 packets?",
      type: "single",
      options: [
        { text: "VRRPv3", correct: false },
        { text: "HSRP", correct: false },
        { text: "HSRP for IPv6", correct: true },
        { text: "VRRPv2", correct: false }
      ]
    },
    {
      id: 59,
      question: "Which FHRP implementation is a nonproprietary IPv4-only election protocol which has one master router per group?",
      type: "single",
      options: [
        { text: "HSRP for IPv6", correct: false },
        { text: "GLBP", correct: false },
        { text: "VRRPv2", correct: true },
        { text: "VRRPv3", correct: false }
      ]
    },
    {
      id: 60,
      question: "The address pool of a DHCP server is configured with 172.18.93.0/25. The network administrator reserves 10 IP addresses for web servers. How many IP addresses are left in the pool to be assigned to other hosts?",
      type: "single",
      options: [
        { text: "106", correct: false },
        { text: "117", correct: false },
        { text: "114", correct: false },
        { text: "120", correct: false },
        { text: "116", correct: true }
      ]
    },
    {
      id: 61,
      question: "The address pool of a DHCP server is configured with 10.3.2.0/24. The network administrator reserves 3 IP addresses for printers. How many IP addresses are left in the pool to be assigned to other hosts?",
      type: "single",
      options: [
        { text: "252", correct: false },
        { text: "241", correct: false },
        { text: "255", correct: false },
        { text: "249", correct: false },
        { text: "251", correct: true }
      ]
    },
    {
      id: 62,
      question: "The address pool of a DHCP server is configured with 172.23.143.0/26. The network administrator reserves 14 IP addresses for file servers. How many IP addresses are left in the pool to be assigned to other hosts?",
      type: "single",
      options: [
        { text: "58", correct: false },
        { text: "48", correct: true },
        { text: "50", correct: false },
        { text: "61", correct: false },
        { text: "40", correct: false }
      ]
    },
    {
      id: 63,
      question: "The address pool of a DHCP server is configured with 10.7.30.0/24. The network administrator reserves 5 IP addresses for printers. How many IP addresses are left in the pool to be assigned to other hosts?",
      type: "single",
      options: [
        { text: "253", correct: false },
        { text: "239", correct: false },
        { text: "249", correct: true },
        { text: "250", correct: false },
        { text: "247", correct: false }
      ]
    },
    {
      id: 64,
      question: "Which FHRP implementation is a nonproprietary IPv4-only election protocol with limited scalability?",
      type: "single",
      options: [
        { text: "VRRPv2", correct: true },
        { text: "GLBP", correct: false },
        { text: "GLBP for IPv6", correct: false },
        { text: "IRDP", correct: false }
      ]
    },
    {
      id: 65,
      question: "The address pool of a DHCP server is configured with 192.168.184.0/26. The network administrator reserves 18 IP addresses for access points. How many IP addresses are left in the pool to be assigned to other hosts?",
      type: "single",
      options: [
        { text: "57", correct: false },
        { text: "44", correct: true },
        { text: "54", correct: false },
        { text: "36", correct: false },
        { text: "46", correct: false }
      ]
    },
    {
      id: 66,
      question: "The address pool of a DHCP server is configured with 10.19.44.0/24. The network administrator reserves 3 IP addresses for servers. How many IP addresses are left in the pool to be assigned to other hosts?",
      type: "single",
      options: [
        { text: "255", correct: false },
        { text: "252", correct: false },
        { text: "241", correct: false },
        { text: "251", correct: true },
        { text: "249", correct: false }
      ]
    },
    {
      id: 67,
      question: "The address pool of a DHCP server is configured with 10.19.44.0/24. The network administrator reserves 6 IP addresses for servers. How many IP addresses are left in the pool to be assigned to other hosts?",
      type: "single",
      options: [
        { text: "246", correct: false },
        { text: "252", correct: false },
        { text: "249", correct: false },
        { text: "248", correct: true },
        { text: "238", correct: false }
      ]
    },
    {
      id: 68,
      question: "The address pool of a DHCP server is configured with 172.21.121.0/25. The network administrator reserves 12 IP addresses for web servers. How many IP addresses are left in the pool to be assigned to other hosts?",
      type: "single",
      options: [
        { text: "115", correct: false },
        { text: "114", correct: true },
        { text: "118", correct: false },
        { text: "104", correct: false },
        { text: "112", correct: false }
      ]
    },
    {
      id: 69,
      question: "Which kind of message is sent by a DHCP client when its IP address lease is about to expire?​",
      type: "single",
      options: [
        { text: "a DHCPREQUEST broadcast message​", correct: false },
        { text: "a DHCPDISCOVER unicast message​", correct: false },
        { text: "a DHCPDISCOVER broadcast message", correct: false },
        { text: "a DHCPREQUEST unicast message​", correct: true }
      ]
    }
];