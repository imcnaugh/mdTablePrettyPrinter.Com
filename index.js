const { prettyPrint } = require('md_table_prettyprint')

function pretty() {
    const table = document.getElementById("textArea")
    table.value = prettyPrint(table.value)
}

document.getElementById("prettyPrintButton").addEventListener("click", pretty)