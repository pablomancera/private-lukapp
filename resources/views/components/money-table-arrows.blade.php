<div class="flex justify-center my-2">
    <div class="lg:w-2/3 w-5/6 ">
        <button onclick="tableMonthQuery(1)" class="float-right w-8 h-8 bg-white rounded-full">></button>
        <button onclick="tableMonthQuery(-1)" class="float-left w-8 h-8 bg-white rounded-full"><</button>
    </div>
</div>
<script>
    let queryDate = new Date();

    function tableMonthQuery(i) {
        queryDate.setMonth(queryDate.getMonth() + i);
        console.log(queryDate);
        getData(queryDate);
    }
</script>