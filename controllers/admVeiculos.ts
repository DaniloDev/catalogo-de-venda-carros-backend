import Veiculo from '../models/veiculo'

const createInitialVeiculos = async() => {
    const total = await Veiculo.countDocuments({})
    if(total===0){
        const veiculo = new Veiculo({
            name: "Fiat Toro",
            price:"200000" ,
            previousprice: "100000",
            brand: "FIat",
            model: "2022",
            photo: "https://motorshow.com.br/wp-content/uploads/sites/2/2021/10/fiat-toro-ranch-2022-26.jpg"
        
        })
        await veiculo.save()

        const veiculo2 = new Veiculo({
            name: "Fiat Uno EVO",
            price:"3049900" ,
            previousprice: "5000000",
            brand: "FIat",
            model: "2016",
            photo: "https://images.kavak.services/images/157637/EXTERIOR-frontSidePilotNear-1643337757152.jpeg?d=756x434"
        
        })
        await veiculo2.save()

        const veiculo3 = new Veiculo({
            name: "Hyundai HB20X",
            price:"6879900" ,
            previousprice: "7000000",
            brand: "Hyundai",
            model: "2018",
            photo: "https://images.kavak.services/images/157265/EXTERIOR-frontSidePilotNear-1642235967181.jpeg?d=756x434"
        
        })
        await veiculo3.save()

        const veiculo4 = new Veiculo({
            name: "Voyage",
            price:"3900000" ,
            previousprice: "4500000",
            brand: "Volkswagen",
            model: "2022",
            photo: "  https://2.bp.blogspot.com/-f9xkKlvwHwY/WwNc3ifbEnI/AAAAAAAAFi0/WstAwOuxatcawcCHA865I7xj6TxCu78dQCLcBGAs/s1600/VW-Voyage-2019%2B%25284%2529.jpg"
        
        })
        await veiculo4.save()
      
    }
}
export{
   createInitialVeiculos
}