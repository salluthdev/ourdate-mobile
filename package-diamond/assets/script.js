$(document).ready(function()
{
	$('.qrcode-guestbook').click(function()
	{
		$('.popup_box').css(
		{
			"opacity":"1", "pointer-events":"auto"
		});
		$('.dark').css(
		{
			"display":"block"
		});
	});
	$('.close').click(function()
	{
		$('.popup_box').css(
		{
			"opacity":"0", "pointer-events":"none"
		});
		$('.dark').css(
		{
			"display":"none"
		});
	});
});