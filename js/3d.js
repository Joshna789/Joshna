$( document ).ready( function() {

    var entries = [ 
        
        { label: 'AYURVEDA', target: '_top' },
        { label: 'SURJERY', target: '_top' },
        { label: 'PADARTHA VIJNANA', target: '_top' },
        { label: 'ASTANGA HRIDAYA', target: '_top' },
        { label: 'AYURVEDA ITIHASA', target: '_top' },
        { label: 'MPDERN PHYSIOLOGY', target: '_top' },
        { label: 'SHAREERA RACHANA', target: '_top' },
        { label: 'CHEMISTRY', target: '_top' },
 ];

    var settings = {

        entries: entries,
        width: 500,
        height: 400,
        radius: '75%',
        radiusMin: 75,
        bgDraw: true,
        bgColor: '#000',
        opacityOver: 1.00,
        opacityOut: 0.05,
        opacitySpeed: 6,
        fov: 800,
        speed: 1.5,
        fontFamily: 'Oswald, Arial, sans-serif',
        fontSize: '15',
        fontColor: '#00f7ff',
        fontWeight: 'normal',//bold
        fontStyle: 'normal',//italic 
        fontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
        fontToUpperCase: true,
        tooltipFontFamily: 'Oswald, Arial, sans-serif',
        tooltipFontSize: '11',
        tooltipFontColor: '#fff',
        tooltipFontWeight: 'normal',//bold
        tooltipFontStyle: 'normal',//italic 
        tooltipFontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
        tooltipFontToUpperCase: false,
        tooltipTextAnchor: 'left',
        tooltipDiffX: 0,
        tooltipDiffY: 10

    };

    //var svg3DTagCloud = new SVG3DTagCloud( document.getElementById( 'holder'  ), settings );
    $( '#holder' ).svg3DTagCloud( settings );

} );