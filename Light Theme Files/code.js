function updateVolToolTip(id){
 vol = "";
 vol += player.settings.volume;
 eval(id + ".toolTip = vol" );
}

function OnOpenStateChange()
{
    if(player.OpenState == osMediaOpen)
    {
        UpdateMetadata();
		UpdateAlbumArt();
    }
}

function UpdateMetadata()
{
    metadata.value = player.currentmedia.getiteminfo("author");
    var temp = player.currentmedia.name;
    if(temp != "")
    {
        if(metadata.value != "")
        {
            metadata.value +=  " - ";
        }
        metadata.value += temp;
    }
    metadata.scrolling = metadata.textWidth>metadata.width;
}

function UpdateAlbumArt()
{
    ctrlAlbumArt.backgroundImage='res://-/#520';
    ctrlAlbumArt.backgroundImage='WMPImage_AlbumArtSmall';
}
