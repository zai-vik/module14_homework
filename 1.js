const xml_string = `
  <list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
  </list>
`;

let parser = new DOMParser();
let xmlDoc = parser.parseFromString(xml_string,"text/xml");
let xmlStudent = xmlDoc.getElementsByTagName("student");
let result = {};

for (let i = 0; i < xmlStudent.length; i++) {
   result[`student ${i + 1}`] = {
       lang: xmlStudent[i].querySelector('name').getAttribute('lang'),
       firstname: xmlStudent[i].querySelector('first').textContent,
       secondname: xmlStudent[i].querySelector('second').textContent,
       age: xmlStudent[i].querySelector('age').textContent,
       prof: xmlStudent[i].querySelector('prof').textContent
   }
}

console.log('Результат', result);
