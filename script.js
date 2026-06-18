function analyzePacket(){

    const result =
`
Protocol: TCP

Source IP:
192.168.1.5

Destination IP:
142.250.183.110

Port:
443

Status:
Safe Traffic
`;

document.getElementById("result").innerHTML =
`<pre>${result}</pre>`;
}
