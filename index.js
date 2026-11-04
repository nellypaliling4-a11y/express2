const express = require('express');
const app = express();
const port = 3000;
app.use(express.static('public'));
app.use(express.json());

const datasiswa =[
  { id: 1, name: "John Doe", age: 20 },
  { id: 2, name: "Jane Smith", age: 22 },
  { id: 3, name: "Bob Johnson", age: 21 },
];

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/css/index.html');
});

"

app.get('/getDataBuku', (req, res) => {
    let html = `
    <h1>Data Buku</h1>
    <table border="1">
        <tr>
            <th>IdBuku</th>
            <th>Nama</th>
            <th>Umur</th>
            <th>Pekerjaan</th>
        </tr>`
`;
    buku.forEach(s => {
        html += `
        <tr>
            <td>${s.id}</td>
            <td>${s.nama}</td>
            <td>${s.umur}</td>
            <td>${s.pekerjaan}</td>
        </tr>
        `;`
    });
    html += `
    </table>
    `;
    res.send(html);
});
"

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
