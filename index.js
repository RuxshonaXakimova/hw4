let cars = [
    {
        name: "malibu",
        price: 31000
    },
    {
        name: "nexia",
        price: 12000
    },
    {
        name: "onix",
        price: 21000
    },
    {
        name: "tahoe",
        price: 100000
    },
    {
        name: "cobalt",
        price: 13000
    },
    {
        name: "tracker",
        price: 26000
    },
    {
        name: "kia k5",
        price: 43000
    },
    {
        name: "santafe",
        price: 50000
    },
    {
        name: "elantra",
        price: 35000
    },
    {
        name: "tico",
        price: 2500
    }
]






let carList = alert('Список машин:\n1)Malibu-31000\n2)Nexia-12000\n3)Onix-21000\n4)Tahoe-100000\n5)Cobalt-13000\n6)Tracker-26000\n7)Kia k5-43000\n8)Santafe-50000\n9)Elantra-35000\n10)Tico-2500' )

let priceRegulate = prompt('Желаете ли вы сортировать машины по подходящей вам цене?\nДа(Yes) / Нет(No)').toLowerCase().trim()

if (priceRegulate === 'да' || priceRegulate === 'yes') {
    let minPrice = +prompt('Введите свою минимальную цену')
    let maxPrice = +prompt('Введите свою максимальную цену')

    if (minPrice >= 2500 && minPrice <=100000) {
        let results = prompt('Результаты поиска:\n(Выберите название понравившейся машины)' + cars.filter((c) => c.price >= minPrice && c.price <= maxPrice)).toLowerCase().trim()
        if (results === "malibu") {
            let malibuPrice = +prompt('Цена:31000\nВведите сумму')
            if (malibuPrice >= 31000) {
                alert('Покупка прошла успешно\nСдачи:' + (malibuPrice-31000))
            } else {
                alert('Недостаточно средств\nОперация отменена')
            }
        } else if(results === "nexia") {
            let nexiaPrice = prompt('Цена:12000\nВведите сумму')
            if (nexiaPrice >= 12000) {
                alert('Покупка прошла успешно\nСдачи:' + (nexiaPrice-12000))
            } else {
                alert('Недостаточно средств\nОперация отменена')
            }
        } else if(results === "onix") {
            let onixPrice = prompt('Цена:21000\nВведите сумму')
            if (onixPrice >= 21000) {
                alert('Покупка прошла успешно\nСдачи:' + (onixPrice-21000))
            } else {
                alert('Недостаточно средств\nОперация отменена')
            }
        } else if(results === "tahoe") {
            let tahoePrice = prompt('Цена:100000\nВведите сумму')
            if (tahoePrice >=100000) {
                alert('Покупка прошла успешно\nСдачи:' + (tahoePrice-100000))
            } else {
                alert('Недостаточно средств\nОперация отменена')
            }
        } else if(results === "cobalt") {
            let cobaltPrice = prompt('Цена:13000\nВведите сумму')
            if (cobaltPrice >= 13000) {
                alert('Покупка прошла успешно\nСдачи:' + (cobaltPrice-13000))
            } else {
                alert('Недостаточно средств\nОперация отменена')
            }
        } else if(results === "tracker") {
            let trackerPrice = prompt('Цена:26000\nВведите сумму')
            if (trackerPrice >= 26000) {
                alert('Покупка прошла успешно\nСдачи:' + (trackerPrice-26000))
            } else {
                alert('Недостаточно средств\nОперация отменена')
            }
        } else if(results === "kia k5") {
            let kiaK5Price = prompt('Цена:43000\nВведите сумму')
            if (kiaK5Price >= 43000) {
                alert('Покупка прошла успешно\nСдачи:' + (kiaK5Price-43000))
            } else {
                alert('Недостаточно средств\nОперация отменена')
            }
        } else if(results === "santafe") {
            let santafePrice = prompt('Цена:50000\nВведите сумму')
            if (santafePrice >= 50000) {
                alert('Покупка прошла успешно\nСдачи:' + (santafePrice-50000))
            } else {
                alert('Недостаточно средств\nОперация отменена')
            }
        } else if(results === "elantra") {
            let elantraPrice = prompt('Цена:35000\nВведите сумму')
            if (elantraPrice >= 35000) {
                alert('Покупка прошла успешно\nСдачи:' + (elantraPrice-35000))
            } else {
                alert('Недостаточно средств\nОперация отменена')
            }
        } else if(results === "tico") {
            let ticoPrice = prompt('Цена:2500\nВведите сумму')
            if (ticoPrice >= 2500) {
                alert('Покупка прошла успешно\nСдачи:' + (ticoPrice-2500))
            } else {
                alert('Недостаточно средств\nОперация отменена')
            }
        }
    } else{
        alert('no result')
    }
    
} else if (priceRegulate === 'нет' || priceRegulate === 'no') {
    let choise = prompt('Какую машину вы выбираете?\n1)Malibu-31000\n2)Nexia-12000\n3)Onix-21000\n4)Tahoe-100000\n5)Cobalt-13000\n6)Tracker-26000\n7)Kia k5-43000\n8)Santafe-50000\n9)Elantra-35000\n10)Tico-2500').toLowerCase().trim()
    if (choise === "malibu" || choise ==1) {
        let malibuPrice = +prompt('Цена:31000\nВведите сумму')
        if (malibuPrice >= 31000) {
            alert('Покупка прошла успешно\nСдачи:' + (malibuPrice-31000))
        } else {
            alert('Недостаточно средств\nОперация отменена')
        }
    } else if(choise === "nexia" || choise ==2) {
        let nexiaPrice = prompt('Цена:12000\nВведите сумму')
        if (nexiaPrice >= 12000) {
            alert('Покупка прошла успешно\nСдачи:' + (nexiaPrice-12000))
        } else {
            alert('Недостаточно средств\nОперация отменена')
        }
    } else if(choise === "onix" || choise ==3) {
        let onixPrice = prompt('Цена:21000\nВведите сумму')
        if (onixPrice >= 21000) {
            alert('Покупка прошла успешно\nСдачи:' + (onixPrice-21000))
        } else {
            alert('Недостаточно средств\nОперация отменена')
        }
    } else if(choise === "tahoe" || choise ==4) {
        let tahoePrice = prompt('Цена:100000\nВведите сумму')
        if (tahoePrice >=100000) {
            alert('Покупка прошла успешно\nСдачи:' + (tahoePrice-100000))
        } else {
            alert('Недостаточно средств\nОперация отменена')
        }
    } else if(choise === "cobalt" || choise ==5) {
        let cobaltPrice = prompt('Цена:13000\nВведите сумму')
        if (cobaltPrice >= 13000) {
            alert('Покупка прошла успешно\nСдачи:' + (cobaltPrice-13000))
        } else {
            alert('Недостаточно средств\nОперация отменена')
        }
    } else if(choise === "tracker" || choise ==6) {
        let trackerPrice = prompt('Цена:26000\nВведите сумму')
        if (trackerPrice >= 26000) {
            alert('Покупка прошла успешно\nСдачи:' + (trackerPrice-26000))
        } else {
            alert('Недостаточно средств\nОперация отменена')
        }
    } else if(choise === "kia k5" || choise ==7) {
        let kiaK5Price = prompt('Цена:43000\nВведите сумму')
        if (kiaK5Price >= 43000) {
            alert('Покупка прошла успешно\nСдачи:' + (kiaK5Price-43000))
        } else {
            alert('Недостаточно средств\nОперация отменена')
        }
    } else if(choise === "santafe" || choise ==8) {
        let santafePrice = prompt('Цена:50000\nВведите сумму')
        if (santafePrice >= 50000) {
            alert('Покупка прошла успешно\nСдачи:' + (santafePrice-50000))
        } else {
            alert('Недостаточно средств\nОперация отменена')
        }
    } else if(choise === "elantra" || choise ==9) {
        let elantraPrice = prompt('Цена:35000\nВведите сумму')
        if (elantraPrice >= 35000) {
            alert('Покупка прошла успешно\nСдачи:' + (elantraPrice-35000))
        } else {
            alert('Недостаточно средств\nОперация отменена')
        }
    } else if(choise === "tico" || choise ==10) {
        let ticoPrice = prompt('Цена:2500\nВведите сумму')
        if (ticoPrice >= 2500) {
            alert('Покупка прошла успешно\nСдачи:' + (ticoPrice-2500))
        } else {
            alert('Недостаточно средств\nОперация отменена')
        }
} else {
    alert('Необходимо выбрать Да или Нет')
}
}
