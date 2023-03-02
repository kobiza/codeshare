const url = `https://www.nadlan.gov.il/?search=%D7%97-501%20-%20%D7%A9%D7%93%D7%A8%D7%AA%20%D7%94%D7%9E%D7%92%D7%93%D7%9C%D7%99%D7%9D%20%D7%97%D7%95%D7%9C%D7%95%D7%9F`


var table = document.querySelector('.tableBody')
var rows = table.querySelectorAll('.tableRow')
var rowsData = [...rows].map((child) => {
    const columns = child.querySelectorAll('.tableCol')
    const columnsValues = [...columns].map(c => c.innerText)
    const [date, address, gush, type, roomNumber, floor, size, amount] = columnsValues

    return {date, address, gush, type, roomNumber, floor, size, amount}
})

copy(rowsData)
