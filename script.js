const data=[
["Aarogyam P Pro Package","assets/aarogyam-page-1.jpg","The uploaded brochure presents Aarogyam P Pro as a 71-parameter package. Please verify final price and terms before publishing."],
["Profile Details","assets/aarogyam-page-2.jpg","The brochure includes thyroid, lipid, liver, kidney, diabetes, vitamin and other profile information."],
["Preventive Health Offer","assets/aarogyam-page-3.jpg","The brochure shows a promotional offer of up to 50% OFF. Verify applicable terms before publishing."],
["Aarogyam Camp Packages","assets/aarogyam-page-5.jpg","The brochure shows Camp Profile 1, Camp Profile 2 and Camp Profile 3."]
];
function showPackage(i){modal.style.display="flex";modalImg.src=data[i][1];modalTitle.textContent=data[i][0];modalText.textContent=data[i][2]}
function closePackage(){modal.style.display="none"}
date.min=new Date().toISOString().split("T")[0];
function book(e){e.preventDefault();let msg=`Hello Tricity Thyrocare Collection Centre,%0AName: ${name.value}%0AMobile: ${phone.value}%0APackage/Test: ${package.value}%0ADate: ${date.value}%0ATime: ${time.value}%0AAddress: ${address.value}`;window.open("https://wa.me/918178009011?text="+msg,"_blank")}
