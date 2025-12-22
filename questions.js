const quizData = [
    {
        id: 1,
        question: "A network administrator is adding a new LAN to a branch office. The administrator needs to support 200 hosts on this LAN, which is to use the 192.168.10.0/24 address space. Which IPv4 address and subnet mask should be used for the new LAN?",
        type: "single",
        options: [
            { text: "192.168.10.0 255.255.255.0", correct: true },
            { text: "192.168.10.128 255.255.255.128", correct: false },
            { text: "192.168.10.0 255.255.255.128", correct: false },
            { text: "192.168.10.192 255.255.255.192", correct: false }
        ]
    },
    {
        id: 2,
        question: "What are two advantages of using static routes? (Choose two.)",
        type: "multi",
        options: [
            { text: "They are more secure than dynamic routes.", correct: true },
            { text: "They use less bandwidth than dynamic routing protocols.", correct: true },
            { text: "They automatically adjust to changes in the network topology.", correct: false },
            { text: "They are easier to configure as the network grows.", correct: false },
            { text: "They require less knowledge to implement and maintain.", correct: false }
        ]
    },
    {
        id: 3,
        question: "Which type of static route is configured with a greater administrative distance than the primary route?",
        type: "single",
        options: [
            { text: "floating static route", correct: true },
            { text: "default static route", correct: false },
            { text: "summary static route", correct: false },
            { text: "standard static route", correct: false }
        ]
    },
    {
        id: 4,
        question: "What is the term that is used to describe a Cisco switch that is used in a small network to provide connectivity to end devices?",
        type: "single",
        options: [
            { text: "access switch", correct: true },
            { text: "distribution switch", correct: false },
            { text: "core switch", correct: false },
            { text: "edge switch", correct: false }
        ]
    },
    {
        id: 5,
        question: "A network administrator is configuring a new Cisco switch. The administrator wants to ensure that only the MAC address of a specific server is allowed to connect to a specific port on the switch. Which feature should be used?",
        type: "single",
        options: [
            { text: "port security", correct: true },
            { text: "VLANs", correct: false },
            { text: "Spanning Tree Protocol", correct: false },
            { text: "DHCP snooping", correct: false }
        ]
    },
    {
        id: 6,
        question: "Which kind of message is sent by a DHCP client when its IP address lease is about to expire?",
        type: "single",
        options: [
            { text: "DHCPREQUEST", correct: true },
            { text: "DHCPDISCOVER", correct: false },
            { text: "DHCPOFFER", correct: false },
            { text: "DHCPACK", correct: false }
        ]
    },
    {
        id: 7,
        question: "Which address and prefix is used when configuring an IPv6 default static route?",
        type: "single",
        options: [
            { text: "::/0", correct: true },
            { text: "::1/128", correct: false },
            { text: "0.0.0.0/0", correct: false },
            { text: "FF02::1/8", correct: false }
        ]
    },
    {
        id: 8,
        question: "A network administrator is dividing a large network into smaller networks to reduce broadcast traffic. What is this process called?",
        type: "single",
        options: [
            { text: "segmenting", correct: true },
            { text: "subnetting", correct: false },
            { text: "routing", correct: false },
            { text: "switching", correct: false }
        ]
    },
    {
        id: 9,
        question: "A coffee shop offers free Wi-Fi. What method is typically used to configure the wireless router's connection to the ISP?",
        type: "single",
        options: [
            { text: "Set the WAN connection as a DHCP client.", correct: true },
            { text: "Set a static IP address on the WAN interface.", correct: false },
            { text: "Use PPPoE with a username and password.", correct: false },
            { text: "Configure a bridge connection.", correct: false }
        ]
    },
    {
        id: 10,
        question: "Which three components form a Bridge ID in STP? (Choose three.)",
        type: "multi",
        options: [
            { text: "Bridge Priority", correct: true },
            { text: "Extended System ID", correct: true },
            { text: "MAC Address", correct: true },
            { text: "IP Address", correct: false },
            { text: "Port ID", correct: false },
            { text: "Cost", correct: false }
        ]
    },
    {
        id: 11,
        question: "What is the purpose of the Spanning Tree Protocol (STP)?",
        type: "single",
        options: [
            { text: "To prevent Layer 2 loops.", correct: true },
            { text: "To prevent Layer 3 loops.", correct: false },
            { text: "To provide redundant paths.", correct: false },
            { text: "To load balance traffic.", correct: false }
        ]
    },
    {
        id: 12,
        question: "Which STP state is responsible for populating the MAC address table but not forwarding data frames?",
        type: "single",
        options: [
            { text: "Learning", correct: true },
            { text: "Forwarding", correct: false },
            { text: "Blocking", correct: false },
            { text: "Listening", correct: false }
        ]
    },
    {
        id: 13,
        question: "What is the primary benefit of EtherChannel?",
        type: "single",
        options: [
            { text: "Increased bandwidth by combining multiple physical links into one logical link.", correct: true },
            { text: "Improved security for switch ports.", correct: false },
            { text: "Reduction in the number of required VLANs.", correct: false },
            { text: "Automatic configuration of trunk ports.", correct: false }
        ]
    },
    {
        id: 14,
        question: "Which protocol is a Cisco proprietary protocol used for EtherChannel?",
        type: "single",
        options: [
            { text: "PAgP", correct: true },
            { text: "LACP", correct: false },
            { text: "STP", correct: false },
            { text: "VTP", correct: false }
        ]
    },
    {
        id: 15,
        question: "Which protocol is an industry-standard protocol used for EtherChannel?",
        type: "single",
        options: [
            { text: "LACP", correct: true },
            { text: "PAgP", correct: false },
            { text: "STP", correct: false },
            { text: "VTP", correct: false }
        ]
    },
    {
        id: 16,
        question: "What are two switch characteristics that could help alleviate network congestion? (Choose two.)",
        type: "multi",
        options: [
            { text: "fast internal switching", correct: true },
            { text: "large frame buffers", correct: true },
            { text: "store-and-forward switching", correct: false },
            { text: "low port density", correct: false },
            { text: "frame check sequence (FCS) check", correct: false }
        ]
    },
    {
        id: 17,
        question: "A network engineer is configuring a LAN with a redundant first hop to make better use of the available network resources. Which protocol should the engineer implement?",
        type: "single",
        options: [
            { text: "GLBP", correct: true },
            { text: "FHRP", correct: false },
            { text: "HSRP", correct: false },
            { text: "VRRP", correct: false }
        ]
    },
    {
        id: 18,
        question: "Which three components are combined to form a bridge ID? (Choose three.)",
        type: "multi",
        options: [
            { text: "extended system ID", correct: true },
            { text: "bridge priority", correct: true },
            { text: "MAC address", correct: true },
            { text: "cost", correct: false },
            { text: "IP address", correct: false },
            { text: "port ID", correct: false }
        ]
    },
    {
        id: 19,
        question: "What is the purpose of the 'ip dhcp excluded-address' command?",
        type: "single",
        options: [
            { text: "To prevent specific IP addresses from being assigned to DHCP clients.", correct: true },
            { text: "To define the range of addresses available in a DHCP pool.", correct: false },
            { text: "To assign a static IP address to a client.", correct: false },
            { text: "To configure the default gateway for DHCP clients.", correct: false }
        ]
    },
    {
        id: 20,
        question: "Which command would a network administrator use to verify the DHCPv4 bindings on a Cisco router?",
        type: "single",
        options: [
            { text: "show ip dhcp binding", correct: true },
            { text: "show ip dhcp pool", correct: false },
            { text: "show ip dhcp server statistics", correct: false },
            { text: "show running-config", correct: false }
        ]
    },
    {
        id: 21,
        question: "What is an advantage of PVST+?",
        type: "single",
        options: [
            { text: "It allows for per-VLAN load balancing.", correct: true },
            { text: "It reduces the amount of BPDU traffic.", correct: false },
            { text: "It provides faster convergence than RSTP.", correct: false },
            { text: "It is an industry-standard protocol.", correct: false }
        ]
    },
    {
        id: 22,
        question: "Which technology is used to mitigate DHCP starvation attacks?",
        type: "single",
        options: [
            { text: "Port security", correct: true },
            { text: "DHCP snooping", correct: false },
            { text: "Dynamic ARP Inspection", correct: false },
            { text: "IP Source Guard", correct: false }
        ]
    },
    {
        id: 23,
        question: "Which feature on a switch should be enabled to prevent a host from acting as a rogue DHCP server?",
        type: "single",
        options: [
            { text: "DHCP snooping", correct: true },
            { text: "Port security", correct: false },
            { text: "Dynamic ARP Inspection", correct: false },
            { text: "VTP", correct: false }
        ]
    },
    {
        id: 24,
        question: "What is the purpose of the Dynamic ARP Inspection (DAI) feature?",
        type: "single",
        options: [
            { text: "To prevent ARP spoofing and poisoning attacks.", correct: true },
            { text: "To prevent DHCP starvation attacks.", correct: false },
            { text: "To provide redundancy at the first hop.", correct: false },
            { text: "To manage VLAN memberships automatically.", correct: false }
        ]
    },
    {
        id: 25,
        question: "Which type of VLAN is used specifically for untagged traffic on an 802.1Q trunk port?",
        type: "single",
        options: [
            { text: "Native VLAN", correct: true },
            { text: "Data VLAN", correct: false },
            { text: "Management VLAN", correct: false },
            { text: "Voice VLAN", correct: false }
        ]
    },
    {
        id: 26,
        question: "What is the default priority for STP on a Cisco switch?",
        type: "single",
        options: [
            { text: "32768", correct: true },
            { text: "1", correct: false },
            { text: "4096", correct: false },
            { text: "65535", correct: false }
        ]
    },
    {
        id: 27,
        question: "In which situation would a Layer 2 switch have an IP address configured?",
        type: "single",
        options: [
            { text: "when the Layer 2 switch needs to be remotely managed", correct: true },
            { text: "when the Layer 2 switch is using a routed port", correct: false },
            { text: "when the Layer 2 switch is the default gateway of user traffic", correct: false },
            { text: "when the Layer 2 switch needs to forward user traffic to another device", correct: false }
        ]
    },
    {
        id: 28,
        question: "Which command would create a valid IPv6 default route?",
        type: "single",
        options: [
            { text: "ipv6 route ::/0 2001:db8:acad:2::a", correct: true },
            { text: "ipv6 route ::/0 fe80::1", correct: false },
            { text: "ipv6 route ::/128 2001:db8:acad:1::1", correct: false },
            { text: "ipv6 route 2001:db8:acad:1::/64 ::1", correct: false }
        ]
    },
    {
        id: 29,
        question: "What will router R2 do with a packet destined for 192.168.10.129 if it has a static route S 192.168.10.128 [1/0] via 10.0.0.6?",
        type: "single",
        options: [
            { text: "forward the packet to 10.0.0.6", correct: true },
            { text: "drop the packet", correct: false },
            { text: "send the packet out Serial0/0/0", correct: false },
            { text: "query the gateway of last resort", correct: false }
        ]
    },
    {
        id: 30,
        question: "Which statement describes the behavior of a switch if it receives a frame and the source MAC address is already in the MAC address table?",
        type: "single",
        options: [
            { text: "The switch refreshes the timer on that entry.", correct: true },
            { text: "The switch drops the frame.", correct: false },
            { text: "The switch replaces the old entry with the new information.", correct: false },
            { text: "The switch forwards the frame to all ports except the source.", correct: false }
        ]
    },
    {
        id: 31,
        question: "What is the purpose of the 'spanning-tree portfast' command?",
        type: "single",
        options: [
            { text: "To allow a port to transition immediately to the forwarding state.", correct: true },
            { text: "To enable EtherChannel on a specific port.", correct: false },
            { text: "To prevent BPDUs from being sent out a port.", correct: false },
            { text: "To set the port as the root port.", correct: false }
        ]
    },
    {
        id: 32,
        question: "Which two methods are used to provide IPv6 address information to hosts? (Choose two.)",
        type: "multi",
        options: [
            { text: "SLAAC", correct: true },
            { text: "DHCPv6", correct: true },
            { text: "ARP", correct: false },
            { text: "NAT", correct: false },
            { text: "ICMPv4", correct: false }
        ]
    },
    {
        id: 33,
        question: "A network administrator uses the command 'ip route 0.0.0.0 0.0.0.0 10.10.10.1'. What type of route is being configured?",
        type: "single",
        options: [
            { text: "Default static route", correct: true },
            { text: "Summary static route", correct: false },
            { text: "Floating static route", correct: false },
            { text: "Host route", correct: false }
        ]
    },
    {
        id: 34,
        question: "Which feature should be implemented to prevent unauthorized devices from connecting to a wireless network?",
        type: "single",
        options: [
            { text: "WPA2 encryption", correct: true },
            { text: "VLANs", correct: false },
            { text: "STP", correct: false },
            { text: "RIP", correct: false }
        ]
    },
    {
        id: 35,
        question: "Which command is used to enable the routing of IPv6 packets on a Cisco router?",
        type: "single",
        options: [
            { text: "ipv6 unicast-routing", correct: true },
            { text: "ip routing", correct: false },
            { text: "ipv6 enable", correct: false },
            { text: "ipv6 route ::/0", correct: false }
        ]
    },
    {
        id: 36,
        question: "What is the administrative distance of a static route?",
        type: "single",
        options: [
            { text: "1", correct: true },
            { text: "0", correct: false },
            { text: "90", correct: false },
            { text: "110", correct: false }
        ]
    },
    {
        id: 37,
        question: "Which protocol is used by a switch to discover neighbor Cisco devices and their information?",
        type: "single",
        options: [
            { text: "CDP", correct: true },
            { text: "LLDP", correct: false },
            { text: "STP", correct: false },
            { text: "VTP", correct: false }
        ]
    },
    {
        id: 38,
        question: "What is the function of a 'router-on-a-stick' configuration?",
        type: "single",
        options: [
            { text: "To perform inter-VLAN routing using a single physical interface.", correct: true },
            { text: "To provide redundancy for the default gateway.", correct: false },
            { text: "To connect multiple routers in a mesh topology.", correct: false },
            { text: "To assign IP addresses to VLANs automatically.", correct: false }
        ]
    },
    {
        id: 39,
        question: "What does the 'L' in the output of 'show ip route' indicate?",
        type: "single",
        options: [
            { text: "Local host route", correct: true },
            { text: "Link-state protocol", correct: false },
            { text: "Longest match", correct: false },
            { text: "Loopback interface", correct: false }
        ]
    },
    {
        id: 40,
        question: "Which type of static route is used to provide a backup path?",
        type: "single",
        options: [
            { text: "Floating static route", correct: true },
            { text: "Standard static route", correct: false },
            { text: "Default static route", correct: false },
            { text: "Summary static route", correct: false }
        ]
    },
    {
        id: 41,
        question: "Which component of the wireless network architecture manages multiple access points?",
        type: "single",
        options: [
            { text: "Wireless LAN Controller (WLC)", correct: true },
            { text: "Wireless Router", correct: false },
            { text: "Access Point (AP)", correct: false },
            { text: "RADIUS Server", correct: false }
        ]
    },
    {
        id: 42,
        question: "Which threat is mitigated by using Port Security?",
        type: "single",
        options: [
            { text: "MAC address table overflow", correct: true },
            { text: "DHCP starvation", correct: false },
            { text: "ARP poisoning", correct: false },
            { text: "IP spoofing", correct: false }
        ]
    },
    {
        id: 43,
        question: "Which command shows the status and protocol of all interfaces on a router?",
        type: "single",
        options: [
            { text: "show ip interface brief", correct: true },
            { text: "show running-config", correct: false },
            { text: "show interfaces", correct: false },
            { text: "show version", correct: false }
        ]
    },
    {
        id: 44,
        question: "What is the maximum number of active links in a single EtherChannel group (LACP)?",
        type: "single",
        options: [
            { text: "8", correct: true },
            { text: "16", correct: false },
            { text: "2", correct: false },
            { text: "4", correct: false }
        ]
    },
    {
        id: 45,
        question: "Which ports should be configured as 'untrusted' for DAI?",
        type: "single",
        options: [
            { text: "Any untrusted port connecting to end-user devices.", correct: true },
            { text: "Ports connecting to other switches.", correct: false },
            { text: "Ports connecting to routers.", correct: false },
            { text: "Ports connecting to DHCP servers.", correct: false }
        ]
    },
    {
        id: 46,
        question: "What type of wireless security uses a pre-shared key?",
        type: "single",
        options: [
            { text: "WPA2 Personal", correct: true },
            { text: "WPA2 Enterprise", correct: false },
            { text: "Open", correct: false },
            { text: "802.1X", correct: false }
        ]
    },
    {
        id: 47,
        question: "Which STP version is compatible with 802.1w?",
        type: "single",
        options: [
            { text: "RSTP", correct: true },
            { text: "PVST+", correct: false },
            { text: "MSTP", correct: false },
            { text: "CST", correct: false }
        ]
    },
    {
        id: 48,
        question: "Which command is used to set the root bridge priority manually?",
        type: "single",
        options: [
            { text: "spanning-tree vlan 1 priority 4096", correct: true },
            { text: "spanning-tree root primary", correct: false },
            { text: "spanning-tree priority 0", correct: false },
            { text: "spanning-tree vlan 1 root", correct: false }
        ]
    },
    {
        id: 49,
        question: "Which protocol provides a method for sharing a single virtual IP address among multiple routers?",
        type: "single",
        options: [
            { text: "HSRP", correct: true },
            { text: "RIP", correct: false },
            { text: "OSPF", correct: false },
            { text: "BGP", correct: false }
        ]
    },
    {
        id: 50,
        question: "What is the purpose of a summary static route?",
        type: "single",
        options: [
            { text: "To reduce the number of entries in the routing table.", correct: true },
            { text: "To provide a default gateway.", correct: false },
            { text: "To provide a backup path.", correct: false },
            { text: "To route traffic to a specific host.", correct: false }
        ]
    },
    {
        id: 51,
        question: "Which command shows the EtherChannel status?",
        type: "single",
        options: [
            { text: "show etherchannel summary", correct: true },
            { text: "show interfaces etherchannel", correct: false },
            { text: "show ip etherchannel", correct: false },
            { text: "show spanning-tree", correct: false }
        ]
    },
    {
        id: 52,
        question: "What is the administrative distance of a connected route?",
        type: "single",
        options: [
            { text: "0", correct: true },
            { text: "1", correct: false },
            { text: "20", correct: false },
            { text: "5", correct: false }
        ]
    },
    {
        id: 53,
        question: "Which IEEE standard defines the 5GHz Wi-Fi with speeds up to 1.3Gbps?",
        type: "single",
        options: [
            { text: "802.11ac", correct: true },
            { text: "802.11n", correct: false },
            { text: "802.11g", correct: false },
            { text: "802.11b", correct: false }
        ]
    },
    {
        id: 54,
        question: "What is a 'sticky' MAC address?",
        type: "single",
        options: [
            { text: "A MAC address that is dynamically learned and saved to the running configuration.", correct: true },
            { text: "A MAC address that is manually configured.", correct: false },
            { text: "A MAC address that never expires.", correct: false },
            { text: "A MAC address used for multicast.", correct: false }
        ]
    },
    {
        id: 55,
        question: "Which mode of EtherChannel configuration only initiates negotiation?",
        type: "single",
        options: [
            { text: "Desirable / Active", correct: true },
            { text: "Auto / Passive", correct: false },
            { text: "On", correct: false },
            { text: "Forwarding", correct: false }
        ]
    },
    {
        id: 56,
        question: "Which three components are combined to form a bridge ID? (Choose three.)",
        type: "multi",
        options: [
            { text: "bridge priority", correct: true },
            { text: "extended system ID", correct: true },
            { text: "MAC address", correct: true },
            { text: "cost", correct: false },
            { text: "IP address", correct: false },
            { text: "port ID", correct: false }
        ]
    }
];