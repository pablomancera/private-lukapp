<div id="bottom-notification" class="w-full bg-yellow-200 p-6 fixed bottom-0">
    <button class="float-right" onclick="closeNotification()">x</button>
    {{ $slot }}
</div>

<script>
    function closeNotification() {
        document.getElementById("bottom-notification").style.display = "none";
    }
</script>