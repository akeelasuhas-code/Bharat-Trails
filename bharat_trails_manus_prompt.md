# Bharat Trails — Complete Manus Build Prompt
### AI-Powered Indian Group Travel Planner for 8–10 People

---

> **Platform:** Manus  
> **Project Name:** Bharat Trails  
> **Curator persona:** Suhas Mehta (replaces "Arjun Mehra" from prior prompts)  
> **Start fresh** — this is a complete, self-contained build instruction. Do not reference any prior session.

---

## 🔴 SYSTEM-LEVEL CONSTRAINTS (Read Before Building Anything)

These are hard rules embedded at the system level — not guidelines:

1. **Never invent hotel names, prices, routes, or permit details.** If real data is unavailable for a specific field, write exactly: *"Unverified — contact [specific authority] at [contact/URL]"* — nothing else is acceptable.
2. **All hotel/stay links must resolve to actual bookable property pages** — not search result pages, not category pages. If a direct link is unavailable, provide the exact MakeMyTrip / Airbnb search string to find it.
3. **Flight and train prices are estimates only** — always link to MakeMyTrip, IRCTC, or the airline's official site for live pricing.
4. **Helicopter services:** Source exclusively from Arunachal Pradesh Civil Aviation and Pawan Hans official portals. Never assume helicopter availability — verify by season and link to official source.
5. **Permit info must link to official government portals only** — never third-party blogs.
6. **Altitude data must come from verified sources** — Google Earth, Wikiloc, India Meteorological Dept, or official state tourism boards.
7. **Instagram / X stay recommendations** must be clearly labelled: *"Community-recommended — verify before booking."*
8. **No placeholder sections, no "coming soon" banners, no empty cards.** Every section header must have populated content beneath it on launch.
9. **All costs are calculated per person, base city = Hyderabad, Telangana (HYD).** Group size = 8–10 people.
10. **Every budget tier must reserve ₹3,000–5,000 per person for gifts/shopping/souvenirs**, clearly separated from operational costs in every breakdown.

---

## 🎨 Visual Design & UI

### Overall Aesthetic
**Editorial luxury adventure magazine crossed with a Figma portfolio site.** Think immersive travel storytelling — fluid, scroll-driven, emotionally charged. Every scroll should feel like turning a page in a high-end mountain journal.

### Color Palette
| Role | Color Name | Hex |
|------|-----------|-----|
| Primary | Sage Green | `#7D9E7E` |
| Primary Dark | Forest Deep | `#2D4A3E` |
| Background Light | Off-White | `#F5F0E8` |
| Background Warm | Warm Cloud | `#EDE8DF` |
| Accent 1 | Sunrise Amber | `#E8A87C` |
| Accent 2 | Glacier Blue | `#A8C5DA` |
| Accent 3 | Dusk Violet | `#8B7BA8` |
| Accent 4 | Mist Gray | `#B8C4BB` |
| Text Dark | Charcoal | `#2C2C2C` |
| Text Light | Off-White | `#F5F0E8` |

### Typography
- **Display/Hero headings:** `Playfair Display` or `Cormorant Garamond` — editorial, romantic, mountain-journal
- **Body text:** `DM Sans` or `Jost` — clean, modern legibility
- **Accent labels (altitude, coordinates, permit codes, prices):** `Space Mono` or `Courier Prime` — monospaced, technical

### Animations (CSS + GSAP)
- **Hero section:** Full-screen parallax — destination photography behind oversized editorial type; subtle cloud/mist drift animation layered in CSS
- **Loading screen:** Mountain silhouette (SVG) that fills upward like an altitude meter, with a pulsing "Bharat Trails" wordmark underneath
- **Destination cards:** 3D perspective tilt on hover (CSS `perspective` + JS `mousemove`)
- **Itinerary timeline:** SVG path that draws itself as the user scrolls down (IntersectionObserver + SVG stroke-dashoffset animation)
- **Budget selector:** Smooth number morphing/counter animation when switching between tiers (GSAP `CountTo` or CSS transitions)
- **Section reveals:** Staggered fade-up on scroll for all content blocks (IntersectionObserver)
- **Navigation:** Transparent on hero, transitions to frosted-glass blur on scroll (`backdrop-filter: blur()`)
- **Zone map:** Interactive India SVG map — hovering a region highlights it; clicking zooms to zone destinations

### Tech Stack
- **Frontend:** HTML5, CSS3, Vanilla JavaScript + GSAP for all animations
- **No backend required for MVP**
- **Google Maps Embed API** — route visualization and property maps
- **Chart.js** — altitude profile graphs (line chart) and budget pie charts
- **YouTube Embed API** — destination travel vlogs auto-embedded per destination page
- **All destination data** stored in a structured `destinations.js` JSON file — modular, easy to edit
- **Fonts** loaded via Google Fonts CDN

---

## 🗺️ Destination Coverage — Complete List (No Exceptions)

Every destination below must be built as a fully populated destination card and page.

### Zone 1 — Northeast India (Clouds & Tribes)
| Destination | State | Key Feature |
|-------------|-------|-------------|
| Ziro Valley | Arunachal Pradesh | Apatani tribe, Ziro Music Festival zone |
| Mechuka | Arunachal Pradesh | Near China border, rarely visited, helicopter access |
| Tawang | Arunachal Pradesh | Monastery at 10,000 ft, ILP + PAP required |
| Dzongu | North Sikkim | Lepcha tribal reserve, Inner Line Permit |
| Dzukou Valley | Nagaland/Manipur border | Seasonal lily valley trek |
| Mawlynnong | Meghalaya | Asia's cleanest village |
| Dawki | Meghalaya | Crystal-clear Umngot river |
| Majuli Island | Assam | World's largest river island, Neo-Vaishnavite satras |
| Longwa Village | Mon, Nagaland | Konyak Naga headhunter tribe, straddles India-Myanmar border |
| Phawngpui (Blue Mountain) | Mizoram | Highest peak in Mizoram, 2,157m, rhododendron forests |
| Cherrapunji (Sohra) | Meghalaya | Living root bridges, highest rainfall zone |
| Laitlum Canyons | Meghalaya | Grand Canyon of the East, sunrise above clouds |

### Zone 2 — North India (Himalayan High)
| Destination | State | Key Feature |
|-------------|-------|-------------|
| Zanskar Valley | Ladakh | Frozen river trek (Chadar), ancient monasteries |
| Kalpa | Kinnaur, Himachal Pradesh | Apple orchards at 9,000 ft, Kinner Kailash backdrop |
| Kinnaur Valley (full loop) | Himachal Pradesh | Sangla, Chitkul (last village), Nako |
| Spiti Valley loop | Himachal Pradesh | Kaza, Langza, Komic, Hikkim (world's highest PO), Key Monastery |
| Chopta + Tungnath | Uttarakhand | Highest Shiva temple, Chandrashila summit |
| Munsiyari | Uttarakhand | Panchachuli base camp, wool market, zero mass tourism |
| Har Ki Dun | Uttarakhand | Valley of Gods trek, camping, Swargarohini views |
| Tirthan Valley | Kullu, Himachal Pradesh | Great Himalayan National Park, fly fishing, eco homestays |
| Barot Valley | Mandi, Himachal Pradesh | Uhl river trout fishing, Nargu Wildlife Sanctuary |
| Bir Billing | Kangra, Himachal Pradesh | World paragliding capital, Tibetan colony |
| Jibhi | Kullu, Himachal Pradesh | Pine forest, Jalori Pass gateway |
| Nako | Kinnaur, Himachal Pradesh | Nako Lake at 3,662m, ancient monastery |
| Sarahan | Shimla, Himachal Pradesh | Bhimakali Temple, gateway to Kinnaur |

### Zone 3 — South India (Misty Highlands)
| Destination | State | Key Feature |
|-------------|-------|-------------|
| Kodaikanal | Tamil Nadu | Coaker's Walk, Pillar Rocks, lake |
| Vattakanal | Tamil Nadu | Kodai's quieter cloudier twin, hippie hamlet, fog-heavy |
| Munnar | Kerala | Tea estates, Eravikulam National Park, Neelakurinji |
| Wayanad | Kerala | Chembra Peak, Edakkal Caves, tribal stays |
| Ooty (Udhagamandalam) | Tamil Nadu | Nilgiri Hills, botanical garden, toy train |
| Kotagiri | Tamil Nadu | Quietest Nilgiri hill station, Catherine Falls |
| Valparai | Coimbatore, Tamil Nadu | Tea estates, shola forests, leopard sightings, hairpin roads |
| Coorg (Madikeri) | Karnataka | Coffee estates, Abbey Falls, Raja's Seat |
| Brahmagiri Peak | Kodagu, Karnataka | Forest permit trek, Iruppu Falls base |
| Agumbe | Shimoga, Karnataka | Rainforest capital, King Cobra habitat, sunset point |
| Chikmagalur | Karnataka | Mullayanagiri (highest peak in Karnataka), coffee trail |
| Horsley Hills | YSR Kadapa, Andhra Pradesh | AP's own hill station, 1,265m, gum tree forests |
| Lambasingi | Vizag, Andhra Pradesh | AP's "Kashmir" — frost in winter, 1,000m, misty |
| Araku Valley | Vizag, Andhra Pradesh | Tribal villages, coffee plantations, Borra Caves, Vistadome train |
| Nethravathi Peak | Dakshina Kannada, Karnataka | Forest dept permit, 1,567m, shola grasslands |

---

## 👥 Group & Trip Structure

- **Group size:** 8–10 people traveling together (all pricing calculated for 10 unless stated)
- **Trip duration:** 6–7 days on-ground
  - Day 1 = Arrival at first destination
  - Day 7 = Departure back toward Hyderabad
  - Within-trip commutes (e.g. Kodaikanal → Munnar, ~3–4 hrs) count as part of trip days and are factored into the day schedule
- **Base city:** Hyderabad, Telangana (HYD airport + Hyderabad railway stations)

---

## 💰 Budget Tiers (Per Person, Fully All-Inclusive)

All three tiers apply to **every destination** and **every itinerary**. The gift buffer is **non-negotiable and always separated** in the breakdown.

| Tier | Total Budget/Person | Gift Buffer | Operational Budget | Vibe |
|------|--------------------|-----------|--------------------|------|
| **Tier 1 — Backpacker Comfortable** | ₹25,000–30,000 | ₹3,000 | ₹22,000–27,000 | Zostel/hostel, shared cabs, local dhabas, train/bus where possible |
| **Tier 2 — Mid-Range Explorer** | ₹30,000–32,000 | ₹4,000 | ₹26,000–28,000 | Boutique guesthouses, private cabs, sit-down restaurants |
| **Tier 3 — Premium Adventure** | ₹33,000–35,000 | ₹5,000 | ₹28,000–30,000 | Forest villas, Airbnb treehouses/ridge cottages, private vehicles, curated dining |

### Every Tier Must Show a Line-Item Breakdown:
- ✈️ Flights / 🚂 Trains / 🚌 Buses from HYD → destination and return
- 🏨 Accommodation — property name + direct bookable link + price per night
- 🍽️ Food per day (street food / local restaurant / resort meal costs)
- 🚗 Local commute within destination (tempo traveller / bike rental / shared jeep)
- 🎫 Entry fees, permits, activity costs (individually listed)
- 🎁 Gift/souvenir buffer (clearly separated line item)
- **Group cost split table for 10 people** (total ÷ 10 with per-person share shown)

---

## 🏨 Accommodation — Sourcing Rules

**Sources (in priority order):**
1. Airbnb India (`airbnb.co.in`) — direct property page link
2. MakeMyTrip (`makemytrip.com`) — direct hotel page
3. Booking.com — direct property page
4. Zostel / Zostel Plus (`zostel.com`) — for Tier 1 in cities where Zostel operates
5. GoIbibo (`goibibo.com`)
6. Direct property websites or Instagram handles (especially remote Northeast/Himachal homestays) — label as *"Community-recommended — verify before booking"*

**Every destination must list minimum 3 stays (one per tier):**

| Field | Required |
|-------|----------|
| Property name | ✅ |
| Direct bookable URL | ✅ (or exact search string) |
| Price per night (group booking / multiple rooms) | ✅ |
| Altitude of the property | ✅ |
| Breakfast/meals included? | ✅ |
| Distance from main attractions | ✅ |
| Cloud/mountain views from room? | ✅ |

**Cloud-level stay preference:** Prioritize properties where the description includes waking up inside clouds, sunrise above fog, snow visible from bed. Flag any property above 8,000 ft / 2,438m with a ☁️ badge.

**By zone:**
- **Northeast:** Tribal homestays (Apatani in Ziro, Lepcha in Dzongu, Naga in Longwa); bamboo cottages; eco-lodges
- **North:** Stone cottages, monastery guesthouses, fixed-tent glamping camps, apple orchard farmstays
- **South:** Plantation bungalows, estate cottages, ridge-top Airbnbs, treehouse resorts, mist-facing forest lodges

---

## 🚗 Transport — Complete, Not Summarized

### From Hyderabad to Every Destination:
- **Flights:** Best route (direct vs. connecting), airline names (IndiGo / Air India / SpiceJet / Vistara), average group fare estimate, direct link to airline search or MakeMyTrip flight search
- **Trains:** Train name + number, departure/arrival stations, journey hours, direct IRCTC link
- **Buses:** Where applicable — operator name (TSRTC/APSRTC/KSRTC/private), RedBus or AbhiBus link
- **Total travel time door to door** (including airport transfer time each end)

### Within Every Destination:
- **Tempo Traveller for 10 people** — hire cost per day, vendor name if known
- **Royal Enfield 350/500cc bike rental** — cost per day, vendor name if known
- **Shared jeep / Sumo / Tata Sumo rates** — per seat and full vehicle
- **Helicopter services** — ONLY for: Ziro, Mechuka, Tawang (Arunachal Pradesh). Source exclusively from:
  - Arunachal Pradesh Civil Aviation official portal
  - Pawan Hans official site (`pawanhans.co.in`)
  - Include: seasonal availability, fare range per seat, booking link or phone
  - If not currently operational, state: *"Helicopter status unverified for this season — check Pawan Hans at pawanhans.co.in or call Arunachal Tourism"*
- **Cab aggregators:** Note explicitly where Ola/Uber work (Guwahati, Shillong, Dehradun, Coimbatore) and where they do NOT (Spiti, Zanskar, remote Northeast — note this clearly)
- **Mule/horse hire** where applicable (Har Ki Dun, Dzukou Valley, high-altitude treks)

---

## 🎫 Permits — Dedicated Hub Section

Build a full **Permit Hub** page/section — not a side note. For every restricted destination:

| Field | Required |
|-------|----------|
| Destination name | ✅ |
| Permit type (ILP / PAP / Forest Dept / Entry fee) | ✅ |
| Who issues it | ✅ |
| Online application portal link (official govt only) | ✅ |
| Processing time | ✅ |
| Cost per person | ✅ |
| Documents required | ✅ |
| Can it be done on arrival or must be in advance? | ✅ |
| Group of 10+ special rules if any | ✅ |

**Known permit destinations (minimum — may not be exhaustive):**
- Dzongu, Sikkim → Inner Line Permit (Sikkim Tourism / DC Office)
- Mechuka, Arunachal → Inner Line Permit (`ilp.arunachalpradesh.gov.in`)
- Tawang, Arunachal → ILP + Protected Area Permit (same portal)
- Ziro, Arunachal → Inner Line Permit
- Longwa Village, Nagaland → Special permits (check with Nagaland Tourism)
- Phawngpui, Mizoram → Inner Line Permit (Mizoram ILP portal)
- Nethravathi Peak, Karnataka → Forest Entry Permit (Karnataka Forest Dept checkpost)
- Dzukou Valley → Entry fee + camping permit (Nagaland Tourism, at trailhead)
- Great Himalayan National Park (Tirthan) → Entry permit (GHNP office, Sai Ropa)
- Eravikulam NP (Munnar) → Entry fee (online + at gate)

**Build a permit checklist component:** User selects destination → app auto-generates required documents checklist, application deadlines, and direct official links.

---

## 🥾 Trek Details — Every Trekking Destination

For every destination with a trek option, build a full trek card with:

| Field | Required |
|-------|----------|
| Trek name and route | ✅ |
| Start point + end point with GPS coordinates | ✅ |
| Total distance (km) | ✅ |
| Elevation gain (start altitude → peak altitude in meters) | ✅ |
| Difficulty: Easy / Moderate / Hard / Challenging | ✅ |
| Best months | ✅ |
| Guide mandatory or optional + cost per day | ✅ |
| Camping available + cost per night | ✅ |
| Gear checklist specific to that trek | ✅ |
| Permit required + official link | ✅ |
| Estimated time to complete | ✅ |
| AllTrails or Wikiloc route link | ✅ |
| Acclimatization days needed (for anything above 3,500m / 12,000 ft) | ✅ |

**Treks to cover (minimum):**
- Dzukou Valley loop (Nagaland)
- Brahmagiri Peak (Karnataka)
- Nethravathi Peak (Karnataka)
- Chembra Peak (Wayanad, Kerala)
- Har Ki Dun (Uttarakhand)
- Tungnath–Chandrashila (Uttarakhand)
- Kinnaur Kailash Parikrama (Himachal)
- Chadar Trek / Zanskar Valley routes (Ladakh)
- Chandrakhani Pass (via Naggar, Himachal)
- Mullayanagiri (Chikmagalur, Karnataka)
- Phawngpui Summit (Mizoram)

---

## 🍽️ Food & Dining — Per Destination, Not Per Region

Every destination gets its own food section:

| Field | Required |
|-------|----------|
| 3 restaurant / dhaba recommendations with Google Maps links | ✅ |
| 2 local dishes to try + where specifically to eat them | ✅ |
| Street food market name and timing (if applicable) | ✅ |
| Vegetarian availability clearly noted | ✅ (Critical for Northeast — most is non-veg) |
| Approximate meal cost per person per day | ✅ |
| Cooking available at stay? (important for Tier 1) | ✅ |

**Notable local food experiences to include:**
- Thukpa / Skyu — Zanskar
- Apong (rice beer) + smoked pork — Ziro, Arunachal
- Plaksa / Chilta — Kinnaur
- Jadoh + Tungrymbai — Meghalaya
- Lukter / Vawksa rep — Mizoram
- Rosep Dawl — Arunachal tribal
- Chutneys + Kavuni Arisi (black rice kheer) — Kodaikanal region
- Appam + Kadala Curry — Wayanad/Munnar
- Araku coffee — Araku Valley

---

## 📋 Multi-Destination Itineraries — Core Feature

**This is the most important feature of the site.** Every itinerary below must be fully written out **day by day** — not summarized. Every day must include: wake-up time, morning activity, drive/transit duration, lunch spot, afternoon activity, evening check-in, dinner recommendation.

### Each Itinerary Must Include:
- Day-by-day schedule (full detail as above)
- Altitude at each stop
- Total km covered over the trip
- Permits required with links
- Altitude profile graph (Chart.js line chart — elevation rise/fall across days)
- Total cost per person across all 3 tiers with full line-item breakdown
- Group cost split table for 10 people
- "Best time to go" banner with seasonal warnings
- Seasonal road/route warnings (closures, snowfall, monsoon washouts)

---

### NORTHEAST ITINERARIES

**NE-1: Arunachal Deep (7 days)**
`Hyderabad → Guwahati → Ziro (2 nights) → Mechuka (2 nights) → Pasighat (1 night) → Guwahati → Hyderabad`

**NE-2: Tawang Monastery Circuit (7 days)**
`Hyderabad → Guwahati → Tawang (3 nights via Bomdila) → Dirang (1 night) → Bomdila (1 night) → Guwahati → Hyderabad`

**NE-3: River Island + Valley of Fire (7 days)**
`Hyderabad → Guwahati → Majuli Island (2 nights) → Dzukou Valley trek (2 nights) → Kohima (1 night) → Guwahati → Hyderabad`

**NE-4: Meghalaya Living Roots (6 days)**
`Hyderabad → Guwahati → Shillong (1 night) → Mawlynnong + Dawki (2 nights) → Cherrapunji + Laitlum (2 nights) → Guwahati → Hyderabad`

**NE-5: Sikkim Sacred Valley (7 days)**
`Hyderabad → Bagdogra → Dzongu (3 nights) → Pelling (1 night) → Yuksom (1 night) → Bagdogra → Hyderabad`

**NE-6: Nagaland Frontier (6 days)**
`Hyderabad → Dimapur → Kohima (1 night) → Dzukou Valley (2 nights) → Longwa Village, Mon (2 nights) → Dimapur → Hyderabad`

**NE-7: Mizoram Blue Mountain (6 days)**
`Hyderabad → Aizawl (1 night) → Phawngpui trek (2 nights) → Dampa Tiger Reserve area (1 night) → Aizawl → Hyderabad`

---

### NORTH (HIMALAYAN) ITINERARIES

**N-1: Kinnaur-Spiti High Altitude Loop (7 days)**
`Hyderabad → Delhi → Shimla → Sarahan (1 night) → Kalpa (2 nights) → Nako (1 night) → Tabo (1 night) → Kaza (1 night) → Manali → fly home`

**N-2: Kinnaur Valley Villages (7 days)**
`Hyderabad → Delhi → Shimla → Chitkul (2 nights) → Sangla (1 night) → Sarahan (1 night) → Kalpa (2 nights) → Delhi → fly home`

**N-3: Uttarakhand Sacred Summits (7 days)**
`Hyderabad → Delhi → Dehradun → Chopta (2 nights) → Tungnath trek → Deoria Tal (1 night) → Munsiyari (2 nights) → Panchachuli views → Delhi → fly home`

**N-4: Valley of Gods Trek (7 days)**
`Hyderabad → Delhi → Dehradun → Sankri → Har Ki Dun trek (3 nights camping) → Tirthan Valley (2 nights) → Delhi → fly home`

**N-5: Zanskar Frozen World (7 days)**
`Hyderabad → Delhi → Leh → Zanskar acclimatization (1 night) → Padum (2 nights) → Rangdum (1 night) → Kargil (1 night) → Leh → fly home`

**N-6: Himachal Hidden Valleys (7 days)**
`Hyderabad → Delhi → Barot Valley (2 nights) → Bir Billing (2 nights, paragliding) → Jibhi (1 night) → Tirthan Valley (1 night) → Delhi → fly home`

**N-7: Spiti Grand Loop (7 days)**
`Hyderabad → Delhi → Manali → Kaza (2 nights, Key Monastery / Hikkim PO) → Langza + Komic villages → Tabo (1 night) → Nako (1 night) → Kalpa (1 night) → Shimla → fly home`

---

### SOUTH (WESTERN GHATS) ITINERARIES

**S-1: Andhra Highlands Drive (6 days, driveable from Hyderabad)**
`Hyderabad → Lambasingi (2 nights) → Araku Valley (2 nights, Borra Caves + Vistadome) → Vizag → Hyderabad (road or flight)`

**S-2: Karnataka Coffee & Cloud (7 days)**
`Hyderabad → Bangalore → Chikmagalur (2 nights, Mullayanagiri trek) → Coorg (2 nights) → Agumbe (1 night, sunset point) → Bangalore → fly home`

**S-3: Tamil Nadu Nilgiri Loop (7 days)**
`Hyderabad → Coimbatore → Kodaikanal (2 nights) → Vattakanal fog walk → Munnar (2 nights, Eravikulam) → Wayanad (1 night) → Calicut → fly home`

**S-4: Nilgiri Tea Triangle (6 days)**
`Hyderabad → Coimbatore → Ooty (1 night, toy train) → Kotagiri (2 nights) → Valparai (2 nights, leopard spotting) → Munnar → Coimbatore → fly home`

**S-5: Karnataka + Kerala Green Loop (7 days)**
`Hyderabad → Bangalore → Horsley Hills (1 night) → Coorg (2 nights) → Brahmagiri trek → Wayanad (2 nights, Chembra Peak) → Calicut → fly home`

**S-6: Ultimate Ghats Circuit (7 days)**
`Hyderabad → Coimbatore → Kodaikanal/Vattakanal (2 nights) → Munnar (2 nights) → Wayanad (1 night) → Coorg (1 night) → Bangalore → fly home`

---

## 📅 Seasonal Calendar — Visual Grid

Build an **interactive 12-month visual calendar grid** for every destination:

- ✅ **Green** — Best time (ideal weather, all routes open, peak experience)
- ⚠️ **Amber** — Shoulder season (accessible, not ideal, some constraints)
- ❌ **Red** — Avoid (road closed, monsoon flooding, extreme cold, permit suspension)

**Known seasonal warnings to include explicitly:**
- Rohtang Pass (Manali → Spiti/Lahaul): Closed November–May
- Zanskar road: Washes out in monsoon (July–September); Chadar Trek only January–February
- Dzukou Valley: Best October–December; avoid monsoon (leeches + trail flooding)
- Mechuka helicopter: Seasonal — verify exact months with Pawan Hans
- Chopta–Tungnath: Closed November–April (snow); best May–June and September–November
- Araku Valley: Year-round, best October–February
- Valparai: Year-round, avoid peak monsoon for road safety
- Phawngpui, Mizoram: Best October–March; monsoon roads challenging

---

## 🌟 Suhas's Hidden Picks (Curator Section)

**Suhas Mehta** — the Bharat Trails curator — personally recommends 5 places before they blow up. Each pick gets:
- Why it's worth going **right now**, before it gets discovered
- The single best stay there (with link)
- Best time to visit
- One specific thing most tourists miss entirely
- A personal note from Suhas (first-person, warm, experienced traveller voice)

**Suggested picks (Suhas should have an informed, local voice about these):**
1. Laitlum Canyons, Meghalaya
2. Lambasingi, Andhra Pradesh (AP's own fog valley, 3 hours from Vizag)
3. Jibhi, Himachal Pradesh (before the Instagram crowd arrives)
4. Longwa Village, Mon, Nagaland (straddling India–Myanmar border, Konyak Naga)
5. Vattakanal, Tamil Nadu (Kodai's cloudier, quieter, more soulful twin)

---

## 🧭 Interactive Budget Calculator

**User controls:**
- Destination (dropdown or search)
- Number of people (slider: 8 / 9 / 10)
- Budget tier (toggle: Tier 1 / Tier 2 / Tier 3)
- Season (dropdown: Jan–Mar / Apr–Jun / Jul–Sep / Oct–Dec)

**App outputs (all calculated live, updating in real time):**
- Complete cost breakdown table (flights, stay, food, transport, permits, activities, gift buffer)
- Suggested stays for chosen tier (with links)
- Transport recommendation
- Permit checklist
- "Best time to go" recommendation based on season selected
- Total cost per person + group total for selected headcount

---

## 🎒 What to Carry — Packing Lists by Zone + Season

**Northeast:**
- Monsoon (June–September): Rain gear, leech socks, waterproof trekking shoes, insect repellent, water purification tablets
- Winter (November–February): Down jacket, thermal layers, wool hat, gloves

**North Himalayan:**
- Summer/Shoulder (May–June, September–October): UV protection (50+ SPF), sunglasses, light down, acclimatization meds (Diamox)
- Winter (November–April): Extreme cold gear, base layers, crampons/microspikes for snow
- All seasons: Altitude sickness meds, headlamp, trekking poles, portable charger

**South Western Ghats:**
- Monsoon (June–September): Rain poncho, quick-dry clothing, anti-fungal foot powder
- Winter (October–February): Light layers, morning fog gear
- All seasons: Sunscreen, light trekking shoes, binoculars (wildlife zones)

**Universal documents checklist:**
- Aadhaar card (mandatory for ILP applications)
- 2 passport photos (for permit applications)
- Printed hotel bookings
- Emergency contacts saved offline
- Travel insurance documents

---

## 🏗️ Implementation Plan (Internal Roadmap — Not Shown to Users on the Website)

*(Build this as a technical reference page accessible via a hidden `/build-roadmap` URL, not linked from the main navigation)*

**Phase 1 — MVP (Current Build):**
Static destination pages, budget calculator, permit checklist, transport guide, seasonal calendar, Suhas's picks, packing lists

**Phase 2 — Live Data Integration:**
Real-time hotel availability via MakeMyTrip / Airbnb API; live flight price fetching via Skyscanner API or Google Flights embed; IRCTC train availability widget

**Phase 3 — User Accounts:**
Saved itineraries, group cost-splitting calculator (split ₹X among 8–10 people with variable individual contributions), shared itinerary links

**Phase 4 — Community Layer:**
User-submitted trip reports, stay reviews, hidden gem spots; upvote system for recommendations; Instagram Reels embed aggregator for destinations

**Phase 5 — Export & Share:**
WhatsApp group itinerary export (PDF + shareable link); packing list generator by destination + season; group expense tracker

---

## 🧱 Page Structure & Navigation

### Main Navigation (sticky, frosted glass on scroll):
- **Destinations** (dropdown: Northeast / North / South)
- **Plan a Trip** (interactive itinerary builder)
- **Budget Calculator**
- **Permits Hub**
- **Suhas's Picks**
- **Seasonal Guide**

### Homepage Sections (in order, scroll-driven):
1. **Full-screen hero** — parallax, mountain photography, tagline: *"India has altitude. Most people miss it."*
2. **Zone selector** — animated India SVG map with three highlighted zones
3. **Featured destinations** — tilt-on-hover card grid (6 cards, curated)
4. **Suhas's Picks** — editorial curator section
5. **How it works** — 4-step trip planning flow (pick destination → choose budget → get itinerary → check permits)
6. **Budget calculator teaser** — live morphing numbers
7. **Seasonal calendar preview** — 3 highlighted destinations by current month
8. **Footer** — contact, data disclaimer, attribution for all data sources

### Destination Page Template (replicated for every destination):
1. Hero with destination name, altitude badge, zone tag
2. "Why go here" — 3 editorial paragraphs
3. Best stays (3 property cards — one per tier)
4. Getting there from Hyderabad (full transport breakdown)
5. Within-destination commute options
6. Trek card (if applicable)
7. Food & dining (3 recommendations)
8. Permits (if required — with checklist component)
9. Seasonal calendar (this destination only)
10. Itineraries featuring this destination (cards linking to full itinerary pages)
11. Altitude profile chart (Chart.js)

---

## ✅ Final Build Checklist

Before considering the build complete, verify:

- [ ] All destinations from the complete list are built with populated pages
- [ ] All itineraries are fully written day-by-day (no summaries)
- [ ] Every stay has a direct bookable URL or verified search string
- [ ] Helicopter info (Ziro, Mechuka, Tawang) sourced only from Pawan Hans / AP Civil Aviation
- [ ] All permit links point to official government portals
- [ ] Budget calculator is interactive and live-updating
- [ ] Seasonal calendar is built as a visual grid for all destinations
- [ ] Altitude profile graphs are functional (Chart.js)
- [ ] All animations working: hero parallax, tilt cards, SVG timeline draw, loading meter
- [ ] Navigation transitions from transparent → frosted glass on scroll
- [ ] Packing lists present for all three zones × two seasons
- [ ] Suhas's Picks section is fully written with personal voice
- [ ] No empty sections, no placeholder text, no "coming soon" anywhere on the site
- [ ] All data integrity warnings present where applicable (unverified fields clearly labelled)
- [ ] Mobile responsive design verified

---

*Built for real travellers planning real trips. Every piece of information on this site either has a verified source linked, or is explicitly flagged as unverified with a direct contact to verify it.*

*— Suhas Mehta, Bharat Trails*
