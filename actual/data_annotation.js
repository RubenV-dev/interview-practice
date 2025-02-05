const cheerio = require('cheerio');

const decoder = (url) => {

    fetch(url)
    .then(response => {
        return response.text()
    })
    .then(html => {
        const $ = cheerio.load(html);
        const headers = []
        const rows = [];
        
        $('tbody tr').each((i, row) => {
            const data = []

            if(i === 0){
                const header = []
                $(row).find('td').each((j, cell) => {
                    header.push($(cell).text());
                });
                headers.push(header)
            } else {
                // select all td in each tr and loop through each
            $(row).find('td').each((j, cell) => {
                data.push($(cell).text());
            });
            rows.push(data);
            }
            
        })

        // rows.sort((a,b) => {
        //     if(a[0] < b[0]) return -1;
        //     if(a[0] > b[0]) return 1;
        //     return 0;
        // })
        // rows.sort()

        // console.log('Headers', headers)
        // console.log('Rows', rows)

        let board = ""
       
        let xcoorArr = []
        let ycoorArr = []
        let charArr = []
        for(let i = 0; i < rows.length; i++){
            [xcoordinate, char, ycoordinate ] = rows[i];
            xcoorArr.push(xcoordinate)
            ycoorArr.push(ycoordinate)
            charArr.push(char)
        }

        let maxRow = parseInt(ycoorArr[ycoorArr.length - 1]) + 1 //3
        let maxCol = parseInt(xcoorArr[xcoorArr.length - 1]) + 1 //4

        //max number of spots to fill
        let maxSpots = maxRow * maxCol

        // console.log(xcoorArr, ycoorArr, charArr)

        for(let i = 0; i < maxRow; i++){
            for( let col = 0; col < maxCol; col++){
                board += " "
                for (let k = 0; k < maxSpots; k++){
                    let x = parseInt(xcoorArr[k])
                    let y = parseInt(ycoorArr[k])
                    let char = charArr[k]

                    if(x === col && y === i){
                        board += (char)
                    }
                }
            }
            board += "\n"
            
        }

        let resultArr = board.split("\n")
        resultArr.pop()

       
        // console.log(resultArr)

        for(let i = resultArr.length - 1; i >= 0; i--){
            let currentLine = resultArr[i]
            console.log(currentLine)

        }
    })
    .catch(error => {
        console.error('Failed to fetch page: ', error)
    })

}

// const result = decoder("https://docs.google.com/document/d/e/2PACX-1vRMx5YQlZNa3ra8dYYxmv-QIQ3YJe8tbI3kqcuC7lQiZm-CSEznKfN_HYNSpoXcZIV3Y_O3YoUB1ecq/pub")
const result = decoder("https://docs.google.com/document/d/e/2PACX-1vQGUck9HIFCyezsrBSnmENk5ieJuYwpt7YHYEzeNJkIb9OSDdx-ov2nRNReKQyey-cwJOoEKUhLmN9z/pub")

// https://docs.google.com/document/d/e/2PACX-1vQGUck9HIFCyezsrBSnmENk5ieJuYwpt7YHYEzeNJkIb9OSDdx-ov2nRNReKQyey-cwJOoEKUhLmN9z/pub

