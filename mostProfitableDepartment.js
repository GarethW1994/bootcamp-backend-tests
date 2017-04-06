module.exports = function(salesDat) {

    var departmentName = '';
    var highestSale = 0;

    //maxSales get the highest sale out all the sales in the profitableDep array
    var totalSalesHardware = 0;
    var totalSalesOutdoor = 0;
    var totalSalesCarpentry = 0;

    for (var i = 0; i < salesDat.length; i++) {
        var salesList = salesDat[i];
        var departName = salesList.department;
        var sales = salesList.sales;

        //Add sales from different departments
        if (departName === 'hardware') {
            totalSalesHardware += sales;
        } else if (departName === 'carpentry') {
            totalSalesCarpentry += sales;
        } else if (departName === 'outdoor') {
            totalSalesOutdoor += sales;
        }

        //determine the biggest sale made
        if (totalSalesCarpentry > totalSalesHardware && totalSalesCarpentry > totalSalesOutdoor) {
            departmentName = ' : carpentry';
            highestSale = totalSalesCarpentry;
        } else if (totalSalesOutdoor > totalSalesCarpentry && totalSalesOutdoor > totalSalesHardware) {
            departmentName = ' : outdoor';
            highestSale = totalSalesOutdoor;
        } else {
            departmentName: ' : hardware';
            highestSale = totalSalesHardware;
        }
    }


    //return profitable department
    return highestSale + departmentName;
}

//log results
//console.log('Profitable Department: ', mostProfitableDepartment(salesData));
