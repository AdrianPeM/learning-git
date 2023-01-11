
const acquireReading = () => ({customer: "ivan", quantity: 10, month: 5, year: 2017})
const baseRate = (month, year) => month + 10

const calculateBaseCharge = (aReading) => {
    return baseRate(aReading.month, aReading.year) * aReading.quantity
}

const enrichReading = (record) => {
    const result = {...record}
    result.baseCharge = calculateBaseCharge(result)
    return result
}

const rawReading = acquireReading()
const aReading = enrichReading(rawReading)
const baseCharge = aReading.baseCharge

console.log(aReading)




