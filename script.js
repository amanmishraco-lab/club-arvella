const SUPABASE_URL = "https://vnuvidqgfdufhkvivfki.supabase.co";
const SUPABASE_KEY = "sb_publishable_ZE4do_lwZXvbsvtsD9bpfA_U1_LvuSL";

const supabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);
const india = [
["Rajasthan","Jaipur","https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=80","The Pink City combines royal palaces, historic forts, colourful bazaars and Rajasthan's legendary hospitality into an unforgettable cultural journey."],
["Rajasthan","Udaipur","https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=1200&q=80","Known for shimmering lakes and romantic palaces, Udaipur offers a refined blend of heritage, luxury hotels and timeless Rajput architecture."],
["Kerala","Munnar","https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=80","Rolling tea gardens, cool mountain air and mist-covered landscapes make Munnar one of India's most peaceful premium escapes."],
["Goa","North Goa","https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80","A lively blend of beaches, nightlife, heritage and coastal dining, North Goa is ideal for travellers seeking energy and relaxation."],
["Uttar Pradesh","Agra","https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80","Agra offers one of the world's most iconic monuments alongside Mughal heritage, remarkable architecture and unforgettable cultural experiences."],
["Uttarakhand","Rishikesh","https://images.unsplash.com/photo-1593181629936-11c609b8db9b?auto=format&fit=crop&w=1200&q=80","Set beside the Ganges and Himalayan foothills, Rishikesh brings together spirituality, wellness, adventure and spectacular natural scenery."],
["Jammu & Kashmir","Srinagar","https://images.unsplash.com/photo-1566837497312-7be7830ae06e?auto=format&fit=crop&w=1200&q=80","Srinagar is celebrated for serene lakes, houseboats, Mughal gardens and dramatic Himalayan surroundings that define a classic Kashmir escape."],
["Tamil Nadu","Ooty","https://images.unsplash.com/photo-1593693411515-c20261bcad6e?auto=format&fit=crop&w=1200&q=80","Cool weather, green hills and colonial charm make Ooty a timeless hill-station holiday destination for families and couples."],
["West Bengal","Darjeeling","https://images.unsplash.com/photo-1544631347-7d9d63c70b7d?auto=format&fit=crop&w=1200&q=80","Tea estates, mountain views and a distinctive Himalayan atmosphere make Darjeeling one of India's most memorable scenic escapes."]
];

const world = [
["Paris","France","https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80","Paris is a timeless celebration of art, fashion, cuisine and architecture, offering iconic landmarks and elegant experiences at every turn."],
["Dubai","United Arab Emirates","https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80","Dubai combines extraordinary modern architecture, luxury shopping, desert adventures and world-class hospitality in one unforgettable destination."],
["London","United Kingdom","https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80","London blends royal heritage, global culture, theatre, museums and contemporary energy into one of the world's most exciting cities."],
["New York City","USA","https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?auto=format&fit=crop&w=1200&q=80","New York City delivers iconic skylines, Broadway, museums, diverse neighbourhoods and an unmatched energy for every kind of traveller."],
["Tokyo","Japan","https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80","Tokyo is a fascinating meeting point of ancient traditions, futuristic technology, exceptional food and endlessly vibrant city life."],
["Rome","Italy","https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&w=1200&q=80","Rome invites travellers to walk through centuries of history while enjoying remarkable art, architecture and one of Europe's greatest food cultures."],
["Singapore","Singapore","https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80","Singapore offers futuristic attractions, lush gardens, exceptional dining and a polished multicultural atmosphere in a compact global city."],
["Bangkok","Thailand","https://images.unsplash.com/photo-1563492065599-3520f775eeed?auto=format&fit=crop&w=1200&q=80","Bangkok combines magnificent temples, luxury hotels, vibrant markets and celebrated cuisine with an exciting round-the-clock atmosphere."],
["Bali","Indonesia","https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80","Bali offers tropical beauty, spiritual traditions, luxury villas, beaches and unforgettable wellness experiences for couples and families."],
["Sydney","Australia","https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1200&q=80","Sydney brings together famous harbour views, beautiful beaches, iconic architecture and a relaxed lifestyle with world-class experiences."],
["Barcelona","Spain","https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1200&q=80","Barcelona offers extraordinary architecture, Mediterranean beaches, creative cuisine and a vibrant cultural atmosphere unlike anywhere else."],
["Istanbul","Turkey","https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&q=80","Istanbul connects Europe and Asia through magnificent mosques, historic markets, Bosphorus views and a deeply layered cultural heritage."]
];

function card(item, type){
 const [region,name,img,desc]=item;
 return `<article class="destination-card"><img src="${img}" alt="${name}" loading="lazy"><div class="content"><span class="meta">${region}</span><h3>${name}</h3><p>${desc}</p><ul><li><b>Best time:</b> October – March</li><li><b>Highlights:</b> Culture, landmarks & experiences</li><li><b>Ideal trip:</b> 3–6 days</li></ul><a class="btn btn-outline" href="contact.html">Plan This Trip</a></div></article>`;
}
function renderData(target,data,searchId){
 const el=document.getElementById(target); if(!el)return;
 const draw=(q="")=>el.innerHTML=data.filter(x=>x[0].toLowerCase().includes(q.toLowerCase())||x[1].toLowerCase().includes(q.toLowerCase())).map(x=>card(x,target)).join("")||"<p>No destination found.</p>";
 draw();
 const input=document.getElementById(searchId); if(input)input.addEventListener("input",e=>draw(e.target.value));
}
renderData("indiaGrid",india,"indiaSearch");
renderData("worldGrid",world,"worldSearch");

document.querySelectorAll(".demo-form").forEach(form => {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const msg = form.querySelector(".form-message");

    const name = form.querySelector('[name="name"]').value;
    const email = form.querySelector('[name="email"]').value;
    const phone = form.querySelector('[name="phone"]').value;
    const destination = form.querySelector('[name="destination"]').value;
    const travelDate = form.querySelector('[name="travelDate"]').value;
    const travellers = form.querySelector('[name="travellers"]').value;
    const message = form.querySelector('[name="message"]').value;

    const { error } = await supabase
      .from("Inquiries")
      .insert([
        {
          Name: name,
          "E-mail": email,
          Phone: phone,
          Destination: destination,
          "Travel Date": travelDate,
          Travellers: travellers,
          Message: message
        }
      ]);

    if (error) {
      console.error(error);
      msg.textContent = "Something went wrong. Please try again.";
    } else {
      msg.textContent = "Thank you! Your enquiry has been received.";
      form.reset();
    }
  });
});
