const company = {
  name: 'GalgaIt',
  location: 'IT',
  amountEmployees: 100,
  middleSalary: 15000,
  premium: { startYear: 5000, middleYear: 10000, finishyear: 20000 },
  count: 0,
  violation: function (answer) {
    if (answer == 'yes') {
      this.middleSalary -= 5000
      console.log(
        'У вас дисциплинарное взыскание с вашей заработной платы удержано 5000 рублей ' +
          'Остаток: ' +
          this.middleSalary
      )
      company.count += 1
    } else if (answer == 'no') {
      console.log('У вас нет взысканий, вы заслужили премию. Наслаждайтесь')
      this.finishPremium()
      console.log('Начислена премия: ' + this.middleSalary)
    }
  },

  startPremium: function () {
    this.middleSalary += this.premium.startYear
  },
  middlePremium: function () {
    this.middleSalary += this.premium.middleYear
  },
  finishPremium: function () {
    this.middleSalary += this.premium.finishyear
  },
  downsizing: function () {
    if (company.count < 3) {
      console.log('Сокращение не планируется')
    }
    if (company.count == 3) {
      company.amountEmployees = 70
      console.log(
        'из за нарушения трудового законодательства мы были вынуждены сократить ваш штат до: ' +
          company.amountEmployees +
          ' человек'
      )
    }
  },
}
company.violation('yes')
company.violation('yes')
company.violation('yes')
company.downsizing()
