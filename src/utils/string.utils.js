export const deconstructName = (name) => {
    let nameval = name.split(", ")
    let first = nameval[1].split(" ")
    let lname = nameval[0]
    let fname = first[0].trim()
    let patient = `${lname}, ${fname}`
    return { lname, fname, patient }
}

export const getAgeOnDischarge = (birthday, discharge) => {
    let birth = new Date(birthday)
    let disdate = new Date(discharge)
    let ageDiff = disdate - birth.getTime()
    let years = Math.floor(ageDiff / 31557600000)
    let months = Math.floor(ageDiff / 2592000000)
    let days = Math.floor(ageDiff / 86400000)
    let age = `${years} YR${years > 1 ? "S" : ""} OLD`
    if (years === 0) {
        age = `${months} MO${months > 1 ? "S" : ""} OLD`
        if (months === 0) {
            age = `${days} DAY${days > 1 ? "S" : ""} OLD`
        }
    }
    return age
}

export const getDifferenceInDays = (start, end) => {
    let s = new Date(start)
    let e = new Date(end)
    let diff = e - s.getTime()
    let days = Math.floor(diff / 86400000)
    return days > 1 ? `${days} DAYS` : (days === 0) ? "<24 HRS" : `${days} DAY`
}

export const formatCurrency = (amt) => {
    if (amt) {
        return amt.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    }
    return amt
}