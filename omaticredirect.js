
    $(document).ready(function()
    {
        console.log('jquery ready!');
        var current     = window.location.href;
        var g_confirm   = current.includes('c=1');
        var go_ads      = "https://www.achievablecpmrevenue.com/icpjfb8bj?key=985f2dbd390cd32a9800861ef1de78ef";
        var ars      = "https://es.trivmvirate.com";
	    var popbox = `<div class="popbox hide" id="popbox"><div aria-label='Close' class="pop-overlay" role="button" tabindex="0"/><div class="pop-content"><div class="popcontent" align="center"> <img src="https://1.bp.blogspot.com/-y8AsxfEerDc/YFSyMPZF14I/AAAAAAAAAAM/JUegMgSE-3o5A_06mx0Fir2-dkB6fAGvACLcBGAsYHQ/s640/re.jpg" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" width="640" height="320" alt="" /> <button class='g_url btn btn-success btn-dwn m-2'>Confirm</button> <br/></div> <button class='g_url popbox-close-button'>&times;</button></div></div>`;

        if(!g_confirm && !go_ads.includes('#YOUR'))
        {
            $('#popbox').removeClass('hide');
        }

        $(document).on('click','.g_url',function(e)
        {
            e.preventDefault();
            var pre_current   = ars + window.location.pathname;
            var g_target=pre_current;

            window.open(go_ads,"_blank");
            window.location.href=g_target;
           
        });

        $(document).on('click','.ads-img',function(e)
        {
            e.preventDefault();
            window.open(go_ads, '_blank');
        });
    });