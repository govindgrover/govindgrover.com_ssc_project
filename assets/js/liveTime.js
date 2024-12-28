window.addEventListener("load", loadLiveTime);

function loadLiveTime()
{
    setInterval(function ()
    {
        document.getElementById("livetime").innerHTML = Date();
    }, 1000);
}
