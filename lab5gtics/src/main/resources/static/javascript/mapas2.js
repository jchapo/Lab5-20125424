
    (g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})({
    key: "AIzaSyC3EG_Pfv_qRSBRSbZBp9cO6LIfcT0LwqI",
    v: "weekly",
    // Use the 'v' parameter to indicate the version to use (weekly, beta, alpha, etc.).
    // Add other bootstrap parameters as needed, using camel case.
});

    // Initialize and add the map
    let map;



        async function initMap() {
        // Request needed libraries.
        const { Map } = await google.maps.importLibrary("maps");
        const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
        const { LatLng } = await google.maps.importLibrary("core");
        const center = new LatLng(37.43238031167444, -122.16795397128632);
        const map = new Map(document.getElementById("map"), {
        zoom: 11,
        center,
        mapId: "4504f8b37365c3d0",
    });

        let infoWindow = new google.maps.InfoWindow(); // Crear una instancia de InfoWindow vacía.

        map.addListener("click", (mapsMouseEvent) => {
        infoWindow.close(); // Cerrar cualquier ventana de información abierta.
        infoWindow = new google.maps.InfoWindow({
        position: mapsMouseEvent.latLng,
    });

        // Construir el contenido de la ventana de información con coordenadas y botón "Copiar Coordenadas"
        const content = document.createElement("div");

        // Agregar las coordenadas
        const coordinatesDiv = document.createElement("div");
        coordinatesDiv.textContent = JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2);

        // Agregar un botón "Copiar Coordenadas" que llame a la función copyCoordinates
        const copyButton = document.createElement("button");
        copyButton.textContent = "Copiar Coordenadas";
        copyButton.addEventListener("click", () => {
        copyCoordinates(mapsMouseEvent.latLng);
    });

        content.appendChild(coordinatesDiv);
        content.appendChild(copyButton);

        infoWindow.setContent(content);
        infoWindow.open(map);
    });

// Función para copiar las coordenadas al portapapeles
        function copyCoordinates(latLng) {
        const coordinatesText = JSON.stringify(latLng.toJSON(), null, 2);
        const textarea = document.createElement("textarea");
        textarea.value = coordinatesText;
        textarea.style.position = "absolute";
        textarea.style.left = "-9999px";

        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");

        document.body.removeChild(textarea);
    }

        for (const property of properties) {
        const AdvancedMarkerElement = new google.maps.marker.AdvancedMarkerElement({
        map,
        content: buildContent(property),
        position: property.position,
        title: property.description,
    });

        AdvancedMarkerElement.addListener("click", () => {
        toggleHighlight(AdvancedMarkerElement, property);
    });

    }
    }

        function toggleHighlight(markerView, property) {
        if (markerView.content.classList.contains("highlight")) {
        markerView.content.classList.remove("highlight");
        markerView.zIndex = null;
    } else {
        markerView.content.classList.add("highlight");
        markerView.zIndex = 1;
    }
    }

        function buildContent(property) {
        const content = document.createElement("div");

        content.classList.add("property");
        content.innerHTML = `
    <div class="icon">
        <i aria-hidden="true" class="fa fa-icon fa-${property.type}" title="${property.type}"></i>
        <span class="fa-sr-only">${property.type}</span>
    </div>
    <div class="details">
        <div class="price">${property.price}</div>
        <div class="address">${property.address}</div>
        <div class="view-link"> <a target="_blank" jstcache="6" href="https://maps.google.com/maps?ll=37.424201,-122.092423&amp;z=14&amp;t=m&amp;hl=en-GB&amp;gl=US&amp;mapclient=apiv3&amp;cid=13494326245636651377" tabindex="0"> <span>View on Google Maps</span> </a> </div>
    </div>
    `;
        return content;
    }

        const properties = [
        {
            address: "215 Emily St, MountainView, CA",
            description: "Single family house with modern design",
            price: "$ 3,889,000",
            type: "tower-cell",
            bed: 5,
            bath: 4.5,
            size: 300,
            position: {
            lat: 37.50024109655184,
            lng: -122.28528451834352,
        },
        },
        {
            address: "108 Squirrel Ln &#128063;, Menlo Park, CA",
            description: "Townhouse with friendly neighbors",
            price: "$ 3,050,000",
            type: "tower-cell",
            bed: 4,
            bath: 3,
            size: 200,
            position: {
            lat: 37.44440882321596,
            lng: -122.2160620727,
        },
        },
        {
            address: "100 Chris St, Portola Valley, CA",
            description: "Spacious warehouse great for small business",
            price: "$ 3,125,000",
            type: "tower-cell",
            bed: 4,
            bath: 4,
            size: 800,
            position: {
            lat: 37.39561833718522,
            lng: -122.21855116258479,
        },
        },
        {
            address: "98 Aleh Ave, Palo Alto, CA",
            description: "A lovely store on busy road",
            price: "$ 4,225,000",
            type: "tower-cell",
            bed: 2,
            bath: 1,
            size: 210,
            position: {
            lat: 37.423928529779644,
            lng: -122.1087629822001,
        },
        },
        {
            address: "2117 Su St, MountainView, CA",
            description: "Single family house near golf club",
            price: "$ 1,700,000",
            type: "tower-cell",
            bed: 4,
            bath: 3,
            size: 200,
            position: {
            lat: 37.40578635332598,
            lng: -122.15043378466069,
        },
        },
        {
            address: "197 Alicia Dr, Santa Clara, CA",
            description: "Multifloor large warehouse",
            price: "$ 5,000,000",
            type: "tower-cell",
            bed: 5,
            bath: 4,
            size: 700,
            position: {
            lat: 37.36399747905774,
            lng: -122.10465384268522,
        },
        },
        {
            address: "700 Jose Ave, Sunnyvale, CA",
            description: "3 storey townhouse with 2 car garage",
            price: "$ 3,850,000",
            type: "tower-cell",
            bed: 4,
            bath: 4,
            size: 600,
            position: {
            lat: 37.38343706184458,
            lng: -122.02340436985183,
        },
        },
        {
            address: "868 Will Ct, Cupertino, CA",
            description: "Single family house in great school zone",
            price: "$ 2,500,000",
            type: "tower-cell",
            bed: 3,
            bath: 2,
            size: 100,
            position: {
            lat: 37.34576403052,
            lng: -122.04455090047453,
        },
        },
        {
            address: "655 Haylee St, Santa Clara, CA",
            description: "2 storey store with large storage room",
            price: "$ 2,500,000",
            type: "tower-cell",
            bed: 3,
            bath: 2,
            size: 450,
            position: {
            lat: 37.362863347890716,
            lng: -121.97802139023555,
        },
        },
        {
            address: "2019 Natasha Dr, San Jose, CA",
            description: "Single family house",
            price: "$ 2,325,000",
            type: "tower-cell",
            bed: 4,
            bath: 3.5,
            size: 500,
            position: {
            lat: 37.41391636421949,
            lng: -121.94592071575907,
        },
        },
        ];

        initMap();

        (g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})({
        key: "AIzaSyC3EG_Pfv_qRSBRSbZBp9cO6LIfcT0LwqI",
        v: "weekly",
        // Use the 'v' parameter to indicate the version to use (weekly, beta, alpha, etc.).
        // Add other bootstrap parameters as needed, using camel case.
    });

        // Función para pegar las coordenadas en los campos de texto
        function pasteCoordinates() {
        // Obtener el texto del portapapeles
        navigator.clipboard.readText().then((clipboardText) => {
            try {
                const coordinates = JSON.parse(clipboardText);
                if (coordinates.lat && coordinates.lng) {
                    // Rellenar los campos de texto con las coordenadas
                    document.getElementById("latInput").value = coordinates.lat;
                    document.getElementById("lngInput").value = coordinates.lng;
                } else {
                    alert("El texto del portapapeles no tiene el formato correcto.");
                }
            } catch (error) {
                alert("Error al analizar el texto del portapapeles.");
            }
        });
    }

        // Agregar un oyente de clic al botón "Pegar Coordenadas"
        document.getElementById("pasteCoordinatesButton").addEventListener("click", () => {
        pasteCoordinates();
    });