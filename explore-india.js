const destinations = [
  {name:'Kashmir',tags:'Mountains • Lakes • Nature',image:'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=82',region:'north',styles:['nature','adventure'],season:'summer',slug:'kashmir'},
  {name:'Ladakh',tags:'Adventure • Mountains • Culture',image:'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=82',region:'north',styles:['adventure','culture'],season:'summer',slug:'ladakh'},
  {name:'Himachal Pradesh',tags:'Hill Stations • Nature • Adventure',image:'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=82',region:'north',styles:['nature','adventure'],season:'summer',slug:'himachal-pradesh'},
  {name:'Uttarakhand',tags:'Pilgrimage • Mountains • Serenity',image:'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=82',region:'north',styles:['nature','adventure'],season:'summer',slug:'uttarakhand'},
  {name:'Rajasthan',tags:'Heritage • Culture • Royalty',image:'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1000&q=82',region:'west',styles:['heritage','culture'],season:'winter',slug:'rajasthan'},
  {name:'Goa',tags:'Beaches • Nightlife • Relaxation',image:'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=82',region:'west',styles:['beach','luxury'],season:'winter',slug:'goa'},
  {name:'Kerala',tags:'Backwaters • Beaches • Wellness',image:'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1000&q=82',region:'south',styles:['beach','nature'],season:'winter',slug:'kerala'},
  {name:'Andaman & Nicobar',tags:'Islands • Beaches • Adventure',image:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=82',region:'islands',styles:['beach','adventure'],season:'winter',slug:'andaman-nicobar'},
  {name:'Sikkim',tags:'Mountains • Culture • Serenity',image:'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1000&q=82',region:'north-east',styles:['nature','culture'],season:'summer',slug:'sikkim'},
  {name:'Meghalaya',tags:'Waterfalls • Nature • Adventure',image:'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=82',region:'north-east',styles:['nature','adventure'],season:'monsoon',slug:'meghalaya'},
  {name:'Gujarat',tags:'Culture • Wildlife • Heritage',image:'https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?auto=format&fit=crop&w=1000&q=82',region:'west',styles:['culture','heritage'],season:'winter',slug:'gujarat'},
  {name:'Maharashtra',tags:'Cities • Forts • Heritage',image:'https://images.unsplash.com/photo-1529253355930-2f9c2f6a4b5f?auto=format&fit=crop&w=1000&q=82',region:'west',styles:['heritage','culture'],season:'winter',slug:'maharashtra'},
  {name:'Tamil Nadu',tags:'Temples • Culture • Heritage',image:'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1000&q=82',region:'south',styles:['culture','heritage'],season:'winter',slug:'tamil-nadu'},
  {name:'Karnataka',tags:'Heritage • Nature • Adventure',image:'https://images.unsplash.com/photo-1600100397608-f0102c4f8b1a?auto=format&fit=crop&w=1000&q=82',region:'south',styles:['heritage','adventure'],season:'winter',slug:'karnataka'},
  {name:'Madhya Pradesh',tags:'Temples • Wildlife • History',image:'https://images.unsplash.com/photo-1609948543911-7f9a3f0a4b72?auto=format&fit=crop&w=1000&q=82',region:'central',styles:['heritage','nature'],season:'winter',slug:'madhya-pradesh'},
  {name:'Uttar Pradesh',tags:'History • Spirituality • Culture',image:'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1000&q=82',region:'north',styles:['heritage','culture'],season:'winter',slug:'uttar-pradesh'},
  {name:'West Bengal',tags:'Culture • History • Nature',image:'https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=1000&q=82',region:'east',styles:['culture','nature'],season:'winter',slug:'west-bengal'},
  {name:'Odisha',tags:'Culture • Temples • Beaches',image:'https://images.unsplash.com/photo-1624806992066-5ffcf7ca186a?auto=format&fit=crop&w=1000&q=82',region:'east',styles:['culture','beach'],season:'winter',slug:'odisha'},
  {name:'Assam',tags:'Tea • Wildlife • River Life',image:'https://images.unsplash.com/photo-1532664189809-02133fee698d?auto=format&fit=crop&w=1000&q=82',region:'north-east',styles:['nature','adventure'],season:'winter',slug:'assam'},
  {name:'Arunachal Pradesh',tags:'Mountains • Monasteries • Wilderness',image:'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1000&q=82',region:'north-east',styles:['nature','adventure'],season:'summer',slug:'arunachal-pradesh'},
  {name:'Delhi',tags:'Capital • History • Cuisine',image:'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1000&q=82',region:'north',styles:['heritage','culture'],season:'winter',slug:'delhi'},
  {name:'Punjab',tags:'Golden Temple • Food • Culture',image:'https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?auto=format&fit=crop&w=1000&q=82',region:'north',styles:['culture','heritage'],season:'winter',slug:'punjab'},
  {name:'Telangana',tags:'Heritage • Cuisine • City Life',image:'https://images.unsplash.com/photo-1598434192043-71111c1f3c0a?auto=format&fit=crop&w=1000&q=82',region:'south',styles:['heritage','culture'],season:'winter',slug:'telangana'},
  {name:'Andhra Pradesh',tags:'Temples • Coast • Culture',image:'https://images.unsplash.com/photo-1524498250077-390f9e378fc0?auto=format&fit=crop&w=1000&q=82',region:'south',styles:['culture','beach'],season:'winter',slug:'andhra-pradesh'},
  {name:'Lakshadweep',tags:'Coral Islands • Beaches • Diving',image:'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=82',region:'islands',styles:['beach','adventure'],season:'winter',slug:'lakshadweep'},
  {name:'Pondicherry',tags:'French Charm • Cafés • Coast',image:'https://images.unsplash.com/photo-1498307833015-e7b400441eb8?auto=format&fit=crop&w=1000&q=82',region:'south',styles:['beach','culture'],season:'winter',slug:'pondicherry'},
  {name:'Bihar',tags:'Buddhist Heritage • History • Spirituality',image:'https://images.unsplash.com/photo-1595658658481-d53d3f999875?auto=format&fit=crop&w=1000&q=82',region:'east',styles:['heritage','culture'],season:'winter',slug:'bihar'},
  {name:'Chhattisgarh',tags:'Waterfalls • Tribal Culture • Forests',image:'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1000&q=82',region:'central',styles:['nature','adventure'],season:'monsoon',slug:'chhattisgarh'},
  {name:'Nagaland',tags:'Tribes • Hills • Festivals',image:'https://images.unsplash.com/photo-1533130061792-64b345e4a833?auto=format&fit=crop&w=1000&q=82',region:'north-east',styles:['culture','adventure'],season:'winter',slug:'nagaland'},
  {name:'Tripura',tags:'Palaces • Lakes • Heritage',image:'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=1000&q=82',region:'north-east',styles:['heritage','culture'],season:'winter',slug:'tripura'}
];

const grid=document.getElementById('destinationGrid');
const searchInput=document.getElementById('searchInput');
const regionFilter=document.getElementById('regionFilter');
const styleFilter=document.getElementById('styleFilter');
const seasonFilter=document.getElementById('seasonFilter');
const resetBtn=document.getElementById('resetBtn');
const emptyState=document.getElementById('emptyState');

const normalise=value=>value.toLowerCase().trim();

function matches(item){
  const q=normalise(searchInput.value);
  const region=regionFilter.value;
  const style=styleFilter.value;
  const season=seasonFilter.value;
  const text=!q || normalise(item.name).includes(q) || normalise(item.tags).includes(q);
  return text && (region==='all'||item.region===region) && (style==='all'||item.styles.includes(style)) && (season==='all'||item.season===season);
}

function render(){
  grid.innerHTML='';
  const visible=destinations.filter(matches);
  emptyState.hidden=visible.length!==0;

  const seen=new Set();
  visible.forEach((item)=>{
    if(seen.has(item.image)){
      console.error('Duplicate image blocked:',item.name,item.image);
      return;
    }
    seen.add(item.image);
    const number=String(destinations.indexOf(item)+1).padStart(2,'0');
    const card=document.createElement('article');
    card.className='destination-card';
    card.innerHTML=`
      <div class="card-image-wrap">
        <img class="card-image" src="${item.image}" alt="${item.name}, India" loading="lazy" decoding="async">
        <span class="number">${number}</span>
      </div>
      <div class="card-body">
        <h2>${item.name}</h2>
        <div class="tags">${item.tags.replaceAll(' • ',' &nbsp;•&nbsp; ')}</div>
        <a class="explore-link" href="destination.html?region=india&place=${item.slug}">EXPLORE <span>→</span></a>
      </div>`;
    grid.appendChild(card);
    const img=card.querySelector('img');
    img.addEventListener('error',()=>{
      img.remove();
      card.classList.add('image-unavailable');
    },{once:true});
  });
}

[searchInput,regionFilter,styleFilter,seasonFilter].forEach(control=>{
  control.addEventListener('input',render);
  control.addEventListener('change',render);
});
resetBtn.addEventListener('click',()=>{
  searchInput.value='';
  regionFilter.value='all';
  styleFilter.value='all';
  seasonFilter.value='all';
  render();
});

document.querySelector('.menu-btn').addEventListener('click',()=>{
  document.querySelector('.nav-links').classList.toggle('mobile-open');
});

render();
