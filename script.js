/* ==========================================================================
   PR PRIME PROJECTS - "Building Trust, Creating Landmarks" by Pratyush Raj
   Unified Shared JavaScript (script.js) - Plain JS (No Frameworks/Libraries)
   ========================================================================== */

(function () {
  "use strict";

  /* ==========================================================================
     1. STRUCTURED DATA REPOSITORY
     ========================================================================== */
  const PR_DATA = {
    company: {
      name: "PR Prime Projects",
      founder: "Pratyush Raj",
      tagline: "Building Trust, Creating Landmarks",
      phone: "8887698855",
      email: "pratyushrajskpr@gmail.com",
      address: "Madhuban Vihar Colony, IIM Road near Maharishi University, Lucknow, Uttar Pradesh, India - 226013",
      whatsappUrl: "https://wa.me/918887698855?text=Hello%20Pratyush%20Raj,%20I%20am%20interested%20in%20PR%20Prime%20Projects%20services."
    },

    pricingPackages: {
      standard: { name: "Standard Construction", rate: 1650 },
      premium: { name: "Premium Luxury", rate: 2200 },
      prime: { name: "Ultra Prime Royal", rate: 3100 },
      architectureOnly: { name: "Architectural & 3D Design", rate: 45 },
      interiorOnly: { name: "Turnkey Interior Decor", rate: 1200 }
    },

    searchIndex: [
      { title: "Turnkey Civil Construction", cat: "Services", link: "#services", snippet: "End-to-end residential & commercial construction from foundation to handover." },
      { title: "Delhi NCR Construction Hub (Noida & Delhi)", cat: "Locations", link: "#service-locations", snippet: "Luxury residences, turnkey civil works, and commercial towers across Noida, Greater Noida, and South Delhi." },
      { title: "Gurugram Prime Projects Hub", cat: "Locations", link: "#service-locations", snippet: "Corporate offices and ultra-prime luxury villas in Cyber City, Golf Course Ext, and Dwarka Expressway." },
      { title: "Pan-India Turnkey Services", cat: "Locations", link: "#service-locations", snippet: "Execution of construction and 3D architectural design all over India with central quality control." },
      { title: "Architectural 2D & 3D Layouts", cat: "Services", link: "#blueprint-section", snippet: "Vastu floor plans, 3D exterior renders & municipal sanction drawings." },
      { title: "Interior & Exterior Design", cat: "Services", link: "#services", snippet: "Luxury modular kitchens, Italian marble, false ceiling & facade cladding." },
      { title: "Project Consulting & PMC", cat: "Services", link: "#services", snippet: "BOQ auditing, contractor supervision, structural health analysis." },
      { title: "House Renovation & Retrofitting", cat: "Services", link: "#services", snippet: "Elevation revamping, structural strengthening & modern remodeling." },
      { title: "Real Estate & Plots in Lucknow", cat: "Real Estate", link: "#portfolio", snippet: "Verified plots on IIM Road, Sultanpur Road & commercial landmarks." },
      { title: "Construction Cost Calculator", cat: "Tools", link: "#estimator-section", snippet: "Calculate estimated building cost per sq.ft and download PDF quotation." },
      { title: "Direct Call Pratyush Raj (8887698855)", cat: "Contact", link: "tel:8887698855", snippet: "Direct phone call line with Founder & Managing Director Pratyush Raj." },
      { title: "WhatsApp Instant Consultation", cat: "Contact", link: "https://wa.me/918887698855", snippet: "Chat directly with Pratyush Raj on WhatsApp for quick estimations." },
      { title: "LinkedIn Official Profile", cat: "Social", link: "https://www.linkedin.com/in/pratyush-raj-a98784230", snippet: "Connect with Pratyush Raj professionally on LinkedIn." },
      { title: "Instagram Business Profile", cat: "Social", link: "https://www.instagram.com/pr_primeprojects?utm_source=qr&dlrf=ZHcydnA2dTQ1NjN5", snippet: "Follow PR Prime Projects for latest construction updates, 3D elevation reels, and project highlights on Instagram." },
      { title: "Facebook Official Business Page", cat: "Social", link: "https://www.facebook.com/profile.php?id=61596460147091", snippet: "Follow PR Prime Projects official business page on Facebook." },
      { title: "Privacy Policy & Data Security", cat: "Legal", link: "#privacyModal", snippet: "Your personal details and property data are kept 100% confidential." },
      { title: "The Aurum Luxury Villa", cat: "Portfolio", link: "#portfolio", snippet: "4,500 sq.ft contemporary residence delivered at IIM Road, Lucknow." },
      { title: "3D Blueprint & Layout Explorer", cat: "Architecture", link: "#blueprint-section", snippet: "Inspect isometric villa cutaway plans and room dimensions." },
      { title: "Pratyush Raj (Founder & MD)", cat: "Leadership", link: "#about-founder", snippet: "Founder vision, 12+ years expertise, direct contact 8887698855." },
      { title: "Official Contact & Lucknow Office", cat: "Contact", link: "#contact-section", snippet: "Madhuban Vihar Colony, IIM Road near Maharishi University, 226013." }
    ],

    chatbotKnowledge: [
      {
        keywords: ["price", "cost", "rate", "budget", "sq ft", "sqft", "estimate", "charges", "calculator", "package", "fees", "how much"],
        reply: `
          <strong>🏗️ Transparent Construction Rates (Turnkey Civil):</strong><br>
          • <strong>Standard Tier:</strong> ₹ 1,650 / sq.ft (Complete foundation, brickwork, plaster, basic vitrified finishes)<br>
          • <strong>Premium Luxury:</strong> ₹ 2,200 / sq.ft (Double vitrified/granite, teak woodwork, premium paint & CP)<br>
          • <strong>Ultra Prime Royal:</strong> ₹ 3,100 / sq.ft (Italian marble, smart home automation, high-end facade cladding)<br>
          • <strong>3D Blueprints & CAD:</strong> ₹ 45 / sq.ft (Vastu floor plans, 3D day/night renders)<br><br>
          <div class="bot-action-links">
            <a href="#estimator-section" class="bot-action-btn">💰 Open Cost Calculator</a>
            <a href="https://wa.me/918887698855?text=Hello%20Pratyush%20Raj,%20please%20share%20quotation%20details." target="_blank" rel="noopener noreferrer" class="bot-action-btn wa">💬 WhatsApp Quote</a>
          </div>
        `
      },
      {
        keywords: ["delhi", "ncr", "noida", "greater noida", "gurugram", "gurgaon", "cyber city", "golf course", "dwarka", "pan-india", "all over india", "india", "location", "cities"],
        reply: `
          <strong>🇮🇳 National Turnkey Presence • Specialized Priority Hubs:</strong><br>
          Under the personal leadership of <strong>Pratyush Raj</strong>, PR Prime Projects serves clients <strong>all over India</strong>, with dedicated on-site teams deployed in:<br>
          • <strong>Delhi NCR Hub:</strong> Turnkey civil structures, independent floors, and corporate fit-outs in South Delhi, Noida & Greater Noida.<br>
          • <strong>Gurugram Hub:</strong> Luxury duplex villas, structural remodeling, and glass facades in DLF Cyber City, Golf Course Ext & Dwarka Expressway.<br>
          • <strong>Lucknow Central HQ:</strong> Engineering design studio & regional headquarters on IIM Road.<br><br>
          <div class="bot-action-links">
            <a href="#service-locations" class="bot-action-btn">🏙️ View Regional Hubs</a>
            <a href="tel:8887698855" class="bot-action-btn">📞 Call Hub Team: 8887698855</a>
          </div>
        `
      },
      {
        keywords: ["pratyush", "raj", "founder", "owner", "director", "leadership", "md", "ceo", "who is"],
        reply: `
          <strong>👨‍💼 About Pratyush Raj:</strong><br>
          <strong>Pratyush Raj</strong> is the Founder & Managing Director of PR Prime Projects. With over 12 years of hands-on structural engineering and civil leadership, he has delivered 150+ landmark residential and commercial projects across Uttar Pradesh and Delhi NCR.<br>
          He personally supervises project milestones and guarantees zero hidden costs.<br><br>
          <div class="bot-action-links">
            <a href="tel:8887698855" class="bot-action-btn">📞 Call Pratyush Raj</a>
            <a href="https://www.linkedin.com/in/pratyush-raj-a98784230" target="_blank" rel="noopener noreferrer" class="bot-action-btn">🔗 LinkedIn Profile</a>
          </div>
        `
      },
      {
        keywords: ["contact", "phone", "call", "number", "email", "reach", "talk", "helpline", "mobile"],
        reply: `
          <strong>📞 Direct Contact Channels:</strong><br>
          • <strong>Direct Phone Line:</strong> <a href="tel:8887698855" style="color:var(--color-gold); font-weight:700;">8887698855</a><br>
          • <strong>WhatsApp:</strong> <a href="https://wa.me/918887698855" target="_blank" style="color:#25D366; font-weight:700;">+91 8887698855</a><br>
          • <strong>Official Email:</strong> <a href="mailto:pratyushrajskpr@gmail.com">pratyushrajskpr@gmail.com</a><br>
          • <strong>Office Hours:</strong> Monday – Sunday (9:00 AM – 8:00 PM)<br><br>
          <div class="bot-action-links">
            <a href="tel:8887698855" class="bot-action-btn">📞 Call 8887698855</a>
            <a href="https://wa.me/918887698855" target="_blank" rel="noopener noreferrer" class="bot-action-btn wa">💬 WhatsApp Chat</a>
          </div>
        `
      },
      {
        keywords: ["address", "office", "where", "location", "lucknow", "iim", "maharishi", "visit", "map", "directions"],
        reply: `
          <strong>📍 Lucknow Central Headquarters:</strong><br>
          Madhuban Vihar Colony, IIM Road near Maharishi University, Lucknow, Uttar Pradesh, PIN - 226013.<br>
          <em>Open 7 days a week from 9:00 AM to 8:00 PM.</em><br><br>
          <div class="bot-action-links">
            <a href="https://maps.google.com/?q=Madhuban+Vihar+Colony+IIM+Road+Maharishi+University+Lucknow+226013" target="_blank" rel="noopener noreferrer" class="bot-action-btn">🗺️ Open in Google Maps</a>
            <a href="tel:8887698855" class="bot-action-btn">📞 Confirm Visit Time</a>
          </div>
        `
      },
      {
        keywords: ["social", "linkedin", "instagram", "facebook", "follow", "profile", "links", "insta", "fb"],
        reply: `
          <strong>🌐 Official Verified Social Media Profiles:</strong><br>
          • <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/pratyush-raj-a98784230" target="_blank" rel="noopener noreferrer" style="color:#0A66C2; font-weight:700;">linkedin.com/in/pratyush-raj-a98784230</a><br>
          • <strong>Instagram:</strong> <a href="https://www.instagram.com/pr_primeprojects?utm_source=qr&dlrf=ZHcydnA2dTQ1NjN5" target="_blank" rel="noopener noreferrer" style="color:#E1306C; font-weight:700;">@pr_primeprojects</a><br>
          • <strong>Facebook:</strong> <a href="https://www.facebook.com/profile.php?id=61596460147091" target="_blank" rel="noopener noreferrer" style="color:#1877F2; font-weight:700;">PR Prime Projects Facebook Page</a><br><br>
          <div class="bot-action-links">
            <a href="https://www.linkedin.com/in/pratyush-raj-a98784230" target="_blank" rel="noopener noreferrer" class="bot-action-btn">LinkedIn</a>
            <a href="https://www.instagram.com/pr_primeprojects?utm_source=qr&dlrf=ZHcydnA2dTQ1NjN5" target="_blank" rel="noopener noreferrer" class="bot-action-btn">Instagram</a>
            <a href="https://www.facebook.com/profile.php?id=61596460147091" target="_blank" rel="noopener noreferrer" class="bot-action-btn">Facebook</a>
          </div>
        `
      },
      {
        keywords: ["admission", "school", "class", "nursery", "enroll", "student", "child", "enrollment", "curriculum", "kids"],
        reply: `
          <strong>🎓 Admissions & Enrollment Desk:</strong><br>
          We accept admissions for <strong>Nursery through Class 8</strong>. Our admissions counselor reviews every submission within 24 hours to schedule a campus walk-through and counseling session.<br><br>
          <div class="bot-action-links">
            <a href="contact.html#admission-form" class="bot-action-btn">📋 Open Admission Form</a>
            <a href="tel:8887698855" class="bot-action-btn">📞 Admission Desk: 8887698855</a>
          </div>
        `
      },
      {
        keywords: ["milestone", "payment", "installment", "stage", "billing", "schedule", "terms", "advance"],
        reply: `
          <strong>🛡️ Transparent 100% Milestone-Based Billing:</strong><br>
          At PR Prime Projects, you never pay upfront lump sums. Payments are divided into verified physical construction stages:<br>
          1. <strong>Site Prep & Excavation</strong> (10%)<br>
          2. <strong>Plinth & Substructure</strong> (15%)<br>
          3. <strong>RCC Column & Slab Casting</strong> (25%)<br>
          4. <strong>Brick Masonry & Conduit</strong> (20%)<br>
          5. <strong>Internal/External Plaster & Tiles</strong> (20%)<br>
          6. <strong>Final Snagging & Keys Handover</strong> (10%)<br><br>
          <div class="bot-action-links">
            <a href="#query-section" class="bot-action-btn">📋 Request Milestone Agreement</a>
          </div>
        `
      },
      {
        keywords: ["3d", "blueprint", "plan", "drawing", "cad", "bim", "vastu", "map", "sanction", "elevation", "floor plan"],
        reply: `
          <strong>📐 Precision Architectural & 3D Planning:</strong><br>
          Every structure begins with 100% Vastu-aligned architectural layouts:<br>
          • High-precision 2D civil working drawings for on-site masons.<br>
          • Photorealistic 3D day and night exterior elevation renders.<br>
          • Complete structural load-bearing and MEP conduit maps.<br>
          • LDA & municipal map sanction documentation.<br><br>
          <div class="bot-action-links">
            <a href="#blueprint-section" class="bot-action-btn">🔍 View 3D Blueprints</a>
            <a href="#query-section" class="bot-action-btn">📋 Request Custom Plan</a>
          </div>
        `
      },
      {
        keywords: ["material", "steel", "cement", "quality", "brand", "isi", "tmt", "strength", "waterproofing"],
        reply: `
          <strong>🧱 Top-Tier Certified Construction Materials:</strong><br>
          We use strictly ISI-certified structural inputs:<br>
          • <strong>Steel:</strong> Tata Tiscon / Jindal Panther Fe550D TMT bars.<br>
          • <strong>Cement:</strong> Ultratech / Ambuja 43 & 53 grade cement.<br>
          • <strong>Waterproofing:</strong> Dr. Fixit / Fosroc multi-layer polymer barriers.<br>
          • <strong>Plumbing & Electrical:</strong> Astral / Supreme CPVC pipes, Havells / Polycab FRLS wiring.<br><br>
          <div class="bot-action-links">
            <a href="tel:8887698855" class="bot-action-btn">📞 Inquire Material Specs</a>
          </div>
        `
      },
      {
        keywords: ["renovation", "remodel", "repair", "interior", "elevation", "glass", "facade", "strengthen", "floor addition"],
        reply: `
          <strong>🔨 House Renovation & Facade Remodeling:</strong><br>
          Upgrade your existing home into a modern architectural landmark:<br>
          • Structural column retrofitting & floor additions (G+1, G+2).<br>
          • Modern toughened glass balcony railings and exterior texture painting.<br>
          • Complete luxury interior transformations and Italian marble installations.<br><br>
          <div class="bot-action-links">
            <a href="#query-section" class="bot-action-btn">📋 Plan My Renovation</a>
            <a href="https://wa.me/918887698855?text=Hello%20Pratyush%20Raj,%20I%20want%20to%20renovate%20my%20property." target="_blank" rel="noopener noreferrer" class="bot-action-btn wa">💬 WhatsApp Photos</a>
          </div>
        `
      },
      {
        keywords: ["plot", "property", "land", "investment", "commercial", "buy", "real estate", "rera", "lda"],
        reply: `
          <strong>🏡 Prime Real Estate & Land Advisory (Lucknow):</strong><br>
          We assist in verified, title-clear residential and commercial land acquisition along key growth corridors: IIM Road, Sultanpur Road, and Amar Shaheed Path. LDA and RERA approved plots with registry support.<br><br>
          <div class="bot-action-links">
            <a href="https://wa.me/918887698855?text=Hello%20Pratyush%20Raj,%20I%20am%20looking%20for%20plots%20in%20Lucknow." target="_blank" rel="noopener noreferrer" class="bot-action-btn wa">💬 Inquire Available Plots</a>
          </div>
        `
      },
      {
        keywords: ["privacy", "policy", "terms", "secure", "safe", "confidential"],
        reply: `
          <strong>🔒 100% Privacy Guarantee:</strong><br>
          Your contact numbers, property addresses, and blueprints are held in strict confidence. All inquiries are handled personally by Pratyush Raj. We never share client records with third-party telemarketers.<br><br>
          <div class="bot-action-links">
            <a href="#" data-open-privacy class="bot-action-btn">Read Privacy Policy</a>
          </div>
        `
      },
      {
        keywords: ["hi", "hello", "namaste", "hey", "good morning", "good evening", "help", "start"],
        reply: `
          👋 <strong>Namaste!</strong> Welcome to <strong>PR Prime Projects by Pratyush Raj</strong>.<br>
          How can I assist your construction or design journey today? Choose a quick option below or type your inquiry directly:<br><br>
          <div class="bot-action-links">
            <a href="#estimator-section" class="bot-action-btn">💰 Cost Calculator</a>
            <a href="#service-locations" class="bot-action-btn">🏙️ Delhi NCR & Gurugram</a>
            <a href="#query-section" class="bot-action-btn">📋 Submit Query Form</a>
            <a href="tel:8887698855" class="bot-action-btn">📞 Call 8887698855</a>
          </div>
        `
      }
    ]
  };

  /* ==========================================================================
     2. TOAST NOTIFICATION HELPER
     ========================================================================== */
  function showToast(message, duration = 4000) {
    let container = document.getElementById("toastContainer");
    if (!container) {
      container = document.createElement("div");
      container.id = "toastContainer";
      container.className = "toast-container";
      document.body.appendChild(container);
    }

    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `
      <svg style="width:20px;height:20px;stroke:#10B981;flex-shrink:0;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
      <span>${message}</span>
    `;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateX(-20px)";
      toast.style.transition = "all 0.3s ease";
      setTimeout(() => toast.remove(), 300);
    }, duration);
  }
  window.showAppToast = showToast;

  /* ==========================================================================
     3. THEME ENGINE (DUAL-MODE: BRIGHT LIGHT / DARK LUXURY)
     ========================================================================== */
  function initTheme() {
    const savedTheme = localStorage.getItem("pr_prime_theme") || "light";
    setTheme(savedTheme);

    // Header, Drawer, and Footer Dual-Mode Selector Buttons
    document.querySelectorAll("[data-theme-val]").forEach(btn => {
      btn.addEventListener("click", () => {
        const targetTheme = btn.getAttribute("data-theme-val");
        if (targetTheme) {
          setTheme(targetTheme);
          showToast(`Switched to ${targetTheme === "dark" ? "Dark Luxury" : "Bright"} theme`);
        }
      });
    });

    // Legacy or single toggle buttons if present
    document.querySelectorAll(".theme-toggle-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        setTheme(newTheme);
      });
    });
  }

  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("pr_prime_theme", theme);

    // Sync all upper pill toggles and footer buttons
    document.querySelectorAll("[data-theme-val]").forEach(btn => {
      if (btn.getAttribute("data-theme-val") === theme) {
        btn.classList.add("active");
        btn.setAttribute("aria-checked", "true");
      } else {
        btn.classList.remove("active");
        btn.setAttribute("aria-checked", "false");
      }
    });

    document.querySelectorAll(".theme-toggle-btn .theme-label").forEach(label => {
      label.textContent = theme === "dark" ? "Light Mode" : "Dark Mode";
    });
  }

  /* ==========================================================================
     4. INTERACTIVE CONSTRUCTION COST ESTIMATOR
     ========================================================================== */
  function initEstimator() {
    let state = {
      areaSqFt: 1800,
      floors: 2,
      packageType: "premium"
    };

    const areaSlider = document.getElementById("estimatorAreaSlider");
    const areaValueDisplay = document.getElementById("estimatorAreaDisplay");
    const floorSelect = document.getElementById("estimatorFloorsSelect");
    const packagePills = document.querySelectorAll(".package-pill-option");
    const totalAmountDisplay = document.getElementById("estimatorTotalAmount");
    const civilCostDisplay = document.getElementById("estCivilCost");
    const finishCostDisplay = document.getElementById("estFinishCost");
    const mepCostDisplay = document.getElementById("estMepCost");
    const timeDisplay = document.getElementById("estDuration");
    const pushToFormBtn = document.getElementById("estimatorPushToFormBtn");
    const downloadEstBtn = document.getElementById("estimatorDownloadBtn");

    function formatRupees(amount) {
      return "₹ " + Number(amount).toLocaleString("en-IN");
    }

    function calculateEstimate() {
      let totalBuiltup = state.areaSqFt * (state.floors || 1);
      let baseRate = PR_DATA.pricingPackages[state.packageType]?.rate || 2200;
      let rawTotal = totalBuiltup * baseRate;

      let civilPart = Math.round(rawTotal * 0.52);
      let finishPart = Math.round(rawTotal * 0.33);
      let mepPart = Math.round(rawTotal * 0.15);
      let estimatedMonths = Math.max(3, Math.round(4 + (totalBuiltup / 1000) * 1.5));

      if (totalAmountDisplay) totalAmountDisplay.textContent = formatRupees(rawTotal);
      if (civilCostDisplay) civilCostDisplay.textContent = formatRupees(civilPart);
      if (finishCostDisplay) finishCostDisplay.textContent = formatRupees(finishPart);
      if (mepCostDisplay) mepCostDisplay.textContent = formatRupees(mepPart);
      if (timeDisplay) timeDisplay.textContent = `${estimatedMonths} - ${estimatedMonths + 2} Months`;

      return {
        area: totalBuiltup,
        rate: baseRate,
        total: rawTotal,
        civil: civilPart,
        finish: finishPart,
        mep: mepPart,
        months: estimatedMonths,
        packageName: PR_DATA.pricingPackages[state.packageType]?.name || "Premium"
      };
    }

    if (areaSlider) {
      areaSlider.addEventListener("input", function (e) {
        state.areaSqFt = parseInt(e.target.value, 10);
        if (areaValueDisplay) {
          areaValueDisplay.textContent = `${state.areaSqFt.toLocaleString("en-IN")} Sq. Ft.`;
        }
        calculateEstimate();
      });
    }

    if (floorSelect) {
      floorSelect.addEventListener("change", function (e) {
        state.floors = parseInt(e.target.value, 10) || 1;
        calculateEstimate();
      });
    }

    packagePills.forEach(pill => {
      pill.addEventListener("click", function () {
        packagePills.forEach(p => p.classList.remove("active"));
        this.classList.add("active");
        state.packageType = this.dataset.package;
        calculateEstimate();
      });
    });

    if (pushToFormBtn) {
      pushToFormBtn.addEventListener("click", function () {
        const est = calculateEstimate();
        const areaField = document.getElementById("leadAreaField");
        const budgetField = document.getElementById("leadBudgetField");
        const serviceField = document.getElementById("leadServiceField");
        const notesField = document.getElementById("leadDetailsField");

        if (areaField) areaField.value = `${est.area} Sq. Ft. (${state.floors} Floors)`;
        if (budgetField) budgetField.value = formatRupees(est.total);
        if (serviceField) serviceField.value = `Complete Turnkey Construction`;
        if (notesField) {
          notesField.value = `Calculated Estimate via Cost Calculator:\n- Area: ${est.area} sq.ft\n- Tier: ${est.packageName}\n- Estimated Cost: ${formatRupees(est.total)}\n- Timeline: ${est.months} - ${est.months + 2} Months`;
        }

        const querySection = document.getElementById("query-section");
        if (querySection) {
          querySection.scrollIntoView({ behavior: "smooth" });
          showToast("Calculated estimate loaded into the query form!");
        }
      });
    }

    if (downloadEstBtn) {
      downloadEstBtn.addEventListener("click", function () {
        const est = calculateEstimate();
        const receipt = `
=====================================================
PR PRIME PROJECTS - ESTIMATED COST BREAKDOWN
"Building Trust, Creating Landmarks"
Founder: Pratyush Raj
Contact: 8887698855 | Email: pratyushrajskpr@gmail.com
Office: Madhuban Vihar Colony, IIM Road, Lucknow - 226013
=====================================================

Project Specifications:
- Total Built-up Area: ${est.area} Sq. Ft. (${state.floors} Floor(s))
- Package Tier: ${est.packageName} (₹ ${est.rate}/sq.ft)
- Estimated Project Timeline: ${est.months} - ${est.months + 2} Months

Estimated Cost Breakdown:
1. Civil Structure & Concrete (52%): ${formatRupees(est.civil)}
2. Finishing, Tiles & Woodwork (33%): ${formatRupees(est.finish)}
3. Electrical, Plumbing & MEP (15%):  ${formatRupees(est.mep)}
-----------------------------------------------------
TOTAL ESTIMATED INVESTMENT:         ${formatRupees(est.total)}
=====================================================
*Note: Preliminary estimate based on Lucknow material indices. Contact Pratyush Raj for detailed site review.
`;
        const blob = new Blob([receipt], { type: "text/plain;charset=utf-8" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = `PR-Prime-Estimate-${Date.now()}.txt`;
        link.click();
        showToast("Estimate summary downloaded successfully!");
      });
    }

    calculateEstimate();
  }

  /* ==========================================================================
     5. AI AGENT CHATBOT (RIGHT-PINNED, INTELLIGENT Q&A & SIMULATED TYPING)
     ========================================================================== */
  function initChatbot() {
    const triggerBtn = document.getElementById("chatbotTriggerBtn");
    const floatingBtn = document.getElementById("floatingChatbotBtn");
    const closeBtn = document.getElementById("chatbotCloseBtn");
    const clearBtn = document.getElementById("chatbotClearBtn");
    const windowEl = document.getElementById("chatbotWindow");
    const messagesBody = document.getElementById("chatbotMessages");
    const inputField = document.getElementById("chatbotInput");
    const inputForm = document.getElementById("chatbotInputForm");
    const sendBtn = document.getElementById("chatbotSendBtn");
    const quickChipsContainer = document.getElementById("chatbotQuickChips");
    const typingIndicator = document.getElementById("chatbotTypingIndicator");

    const INITIAL_WELCOME_HTML = `
      <div class="chat-msg bot">
        <div class="bot-badge-tag">AI Agent • PR Prime</div>
        <p>👋 <strong>Namaste!</strong> I am the official <strong>PR Prime AI Assistant</strong>, representing <strong>Pratyush Raj</strong>.</p>
        <p>I can instantly answer any question about turnkey civil construction rates, 3D architectural plans, admissions, our specialized hubs in <strong>Delhi NCR & Gurugram</strong>, Lucknow HQ, or connect you directly with Pratyush Raj.</p>
        <div class="bot-action-links">
          <a href="tel:8887698855" class="bot-action-btn">📞 Call 8887698855</a>
          <a href="https://wa.me/918887698855" target="_blank" rel="noopener noreferrer" class="bot-action-btn wa">💬 WhatsApp</a>
        </div>
      </div>
    `;

    function toggleChat(open) {
      if (open !== undefined) {
        windowEl?.classList.toggle("open", open);
      } else {
        windowEl?.classList.toggle("open");
      }
      if (windowEl?.classList.contains("open")) {
        inputField?.focus();
      }
    }

    function appendMessage(htmlContent, sender = "bot") {
      if (!messagesBody) return;
      const msgDiv = document.createElement("div");
      msgDiv.className = `chat-msg ${sender}`;
      if (sender === "bot") {
        msgDiv.innerHTML = `<div class="bot-badge-tag">AI Agent • PR Prime</div>` + htmlContent;
      } else {
        msgDiv.textContent = htmlContent;
      }
      messagesBody.appendChild(msgDiv);
      messagesBody.scrollTop = messagesBody.scrollHeight;
    }

    function getReply(userText) {
      const lower = userText.toLowerCase().replace(/[^a-z0-9\s]/g, " ");
      const tokens = lower.split(/\s+/).filter(Boolean);

      let bestMatch = null;
      let highestScore = 0;

      for (const entry of PR_DATA.chatbotKnowledge) {
        let score = 0;
        for (const kw of entry.keywords) {
          if (lower.includes(kw)) {
            score += kw.length > 5 ? 3 : 2;
          }
          if (tokens.includes(kw)) {
            score += 2;
          }
        }
        if (score > highestScore) {
          highestScore = score;
          bestMatch = entry;
        }
      }

      if (bestMatch && highestScore > 0) {
        return bestMatch.reply;
      }

      return `
        <p>Thank you for asking! I am the <strong>PR Prime AI Assistant</strong> representing <strong>Pratyush Raj</strong>.</p>
        <p>I would be delighted to guide you regarding turnkey civil construction, 3D architectural plans, admissions, our priority hubs in <strong>Delhi NCR & Gurugram</strong>, or Lucknow site visits.</p>
        <div class="bot-action-links">
          <a href="tel:8887698855" class="bot-action-btn">📞 Call 8887698855</a>
          <a href="https://wa.me/918887698855" target="_blank" rel="noopener noreferrer" class="bot-action-btn wa">💬 WhatsApp Chat</a>
          <a href="#query-section" class="bot-action-btn">📋 Submit Query</a>
        </div>
      `;
    }

    function handleSend() {
      if (!inputField) return;
      const text = inputField.value.trim();
      if (!text) return;

      appendMessage(text, "user");
      inputField.value = "";

      // Show typing indicator
      if (typingIndicator) {
        typingIndicator.style.display = "flex";
        messagesBody.scrollTop = messagesBody.scrollHeight;
      }

      setTimeout(() => {
        if (typingIndicator) {
          typingIndicator.style.display = "none";
        }
        const reply = getReply(text);
        appendMessage(reply, "bot");
      }, 550);
    }

    triggerBtn?.addEventListener("click", () => toggleChat());
    floatingBtn?.addEventListener("click", () => toggleChat(true));
    closeBtn?.addEventListener("click", () => toggleChat(false));

    clearBtn?.addEventListener("click", () => {
      if (messagesBody) {
        messagesBody.innerHTML = INITIAL_WELCOME_HTML;
        showToast("Chat history cleared.");
      }
    });

    sendBtn?.addEventListener("click", handleSend);
    inputForm?.addEventListener("submit", (e) => {
      e.preventDefault();
      handleSend();
    });
    inputField?.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        handleSend();
      }
    });

    quickChipsContainer?.addEventListener("click", (e) => {
      const chip = e.target.closest(".quick-chip");
      if (chip && inputField) {
        inputField.value = chip.dataset.prompt || chip.textContent.trim();
        handleSend();
      }
    });
  }

  /* ==========================================================================
     6. GLOBAL SEARCH OMNIBAR
     ========================================================================== */
  function initSearch() {
    const searchOverlay = document.getElementById("searchModalOverlay");
    const searchInput = document.getElementById("globalSearchInput");
    const searchCloseBtn = document.getElementById("searchModalCloseBtn");
    const searchResultsBox = document.getElementById("searchResultsBox");
    const searchTriggers = document.querySelectorAll(".search-trigger-btn, #mobileBarSearchBtn");

    function openSearch() {
      if (!searchOverlay) return;
      searchOverlay.classList.add("open");
      if (searchInput) {
        searchInput.value = "";
        searchInput.focus();
        renderResults(PR_DATA.searchIndex.slice(0, 6));
      }
    }

    function closeSearch() {
      searchOverlay?.classList.remove("open");
    }

    function renderResults(items) {
      if (!searchResultsBox) return;
      if (items.length === 0) {
        searchResultsBox.innerHTML = `
          <div style="text-align:center; padding: 2rem 1.5rem; color: var(--color-neutral-2);">
            <div style="font-size: 1.5rem; margin-bottom: 0.5rem;">🔍</div>
            <p style="font-weight: 600; margin-bottom: 0.25rem;">No direct matching results found.</p>
            <p style="font-size: 0.85rem;">Try searching "Delhi NCR", "Cost Calculator", "3D Plans", or "Pratyush Raj".</p>
          </div>
        `;
        return;
      }

      searchResultsBox.innerHTML = items.map(item => `
        <div class="search-result-item" onclick="window.location.href='${item.link}'; document.getElementById('searchModalOverlay').classList.remove('open');">
          <div style="flex:1; padding-right:12px;">
            <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:0.25rem;">
              <span style="font-size:0.75rem; background:var(--color-primary-tint); padding:0.2rem 0.5rem; border-radius:4px; color:var(--color-primary); font-weight:700;">${item.cat}</span>
              <h5 style="font-size:0.95rem; color:var(--color-text-dark); margin:0;">${item.title}</h5>
            </div>
            <p style="font-size:0.82rem; color:var(--color-neutral-2); margin:0; line-height:1.4;">${item.snippet}</p>
          </div>
          <svg style="width:16px; height:16px; stroke:var(--color-gold); flex-shrink:0;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </div>
      `).join("");
    }

    searchTriggers.forEach(btn => btn.addEventListener("click", openSearch));
    searchCloseBtn?.addEventListener("click", closeSearch);
    searchOverlay?.addEventListener("click", (e) => {
      if (e.target === searchOverlay) closeSearch();
    });

    searchInput?.addEventListener("input", (e) => {
      const q = e.target.value.toLowerCase().trim();
      if (!q) {
        renderResults(PR_DATA.searchIndex.slice(0, 6));
        return;
      }
      const filtered = PR_DATA.searchIndex.filter(item =>
        item.title.toLowerCase().includes(q) ||
        item.cat.toLowerCase().includes(q) ||
        item.snippet.toLowerCase().includes(q)
      );
      renderResults(filtered);
    });

    document.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        openSearch();
      } else if (e.key === "Escape") {
        closeSearch();
      }
    });
  }

  /* ==========================================================================
     6B. HERO LIVE SEARCH ENGINE & AUTOCOMPLETE
     ========================================================================== */
  function initHeroSearch() {
    const heroInput = document.getElementById("heroSearchInput");
    const heroBtn = document.getElementById("heroSearchBtn");
    const heroDropdown = document.getElementById("heroSearchDropdown");
    const heroWrapper = document.getElementById("heroSearchWrapper");
    const heroChips = document.querySelectorAll(".hero-search-chips .search-chip");

    if (!heroInput || !heroDropdown) return;

    function highlightMatch(text, query) {
      if (!query) return text;
      const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
      return text.replace(regex, `<mark style="background:rgba(212,175,55,0.25); color:inherit; font-weight:700; padding:0 2px; border-radius:2px;">$1</mark>`);
    }

    function searchItems(query) {
      const q = query.toLowerCase().trim();
      if (!q) return [];
      return PR_DATA.searchIndex.filter(item => {
        return (
          item.title.toLowerCase().includes(q) ||
          item.cat.toLowerCase().includes(q) ||
          item.snippet.toLowerCase().includes(q)
        );
      });
    }

    function renderHeroDropdown(results, query) {
      if (!results || results.length === 0) {
        heroDropdown.innerHTML = `
          <div class="search-empty-state" style="padding: 1.25rem 1rem; text-align: center; color: var(--color-neutral-2);">
            <div style="font-size: 1.5rem; margin-bottom: 0.25rem;">🔍</div>
            <div style="font-weight: 600; font-size: 0.95rem; margin-bottom: 0.25rem;">No exact match for "${query}"</div>
            <div style="font-size: 0.8rem; margin-bottom: 0.75rem;">Try one of our popular quick queries:</div>
            <div style="display:flex; justify-content:center; gap:6px; flex-wrap:wrap;">
              <button type="button" class="search-chip hero-inline-chip" data-query="Delhi NCR" style="font-size:0.75rem; padding:4px 8px;">🏙️ Delhi NCR</button>
              <button type="button" class="search-chip hero-inline-chip" data-query="Cost Calculator" style="font-size:0.75rem; padding:4px 8px;">💰 Cost Calculator</button>
              <button type="button" class="search-chip hero-inline-chip" data-query="3D Blueprints" style="font-size:0.75rem; padding:4px 8px;">📐 3D Blueprints</button>
            </div>
          </div>
        `;
        heroDropdown.querySelectorAll(".hero-inline-chip").forEach(c => {
          c.addEventListener("click", () => {
            const qVal = c.getAttribute("data-query");
            heroInput.value = qVal;
            renderHeroDropdown(searchItems(qVal), qVal);
          });
        });
        heroDropdown.removeAttribute("hidden");
        return;
      }

      heroDropdown.innerHTML = results.slice(0, 6).map(item => `
        <a href="${item.link}" class="hero-dropdown-item" style="display:flex; align-items:flex-start; justify-content:space-between; padding:0.75rem 1rem; border-bottom:1px solid var(--color-border); text-decoration:none; color:inherit; transition:background var(--transition-fast);">
          <div style="flex:1; padding-right:12px;">
            <div style="display:flex; align-items:center; gap:6px; margin-bottom:3px;">
              <span style="font-size:0.7rem; font-weight:700; text-transform:uppercase; letter-spacing:0.04em; background:var(--color-primary-tint); color:var(--color-primary); padding:2px 6px; border-radius:4px;">${item.cat}</span>
              <strong style="font-size:0.92rem; color:var(--color-text-dark);">${highlightMatch(item.title, query)}</strong>
            </div>
            <p style="font-size:0.8rem; color:var(--color-neutral-2); margin:0; line-height:1.4;">${highlightMatch(item.snippet, query)}</p>
          </div>
          <svg style="width:16px; height:16px; stroke:var(--color-gold); flex-shrink:0; margin-top:4px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      `).join("") + `
        <div style="padding: 0.5rem 1rem; background: var(--color-neutral-1); display:flex; justify-content:space-between; align-items:center; font-size:0.76rem; color:var(--color-neutral-2);">
          <span>Found ${results.length} result${results.length > 1 ? 's' : ''}</span>
          <span>Click to view • Esc to close</span>
        </div>
      `;

      // Interactive hover
      heroDropdown.querySelectorAll(".hero-dropdown-item").forEach(el => {
        el.addEventListener("mouseenter", () => {
          el.style.backgroundColor = "var(--color-neutral-1)";
        });
        el.addEventListener("mouseleave", () => {
          el.style.backgroundColor = "transparent";
        });
        el.addEventListener("click", () => {
          heroDropdown.setAttribute("hidden", "true");
        });
      });

      heroDropdown.removeAttribute("hidden");
    }

    function doSearch() {
      const q = heroInput.value.trim();
      if (!q) {
        heroDropdown.setAttribute("hidden", "true");
        return;
      }
      const results = searchItems(q);
      renderHeroDropdown(results, q);
    }

    heroInput.addEventListener("input", doSearch);
    heroInput.addEventListener("focus", () => {
      if (heroInput.value.trim()) doSearch();
    });

    heroBtn?.addEventListener("click", () => {
      const q = heroInput.value.trim();
      if (!q) {
        heroInput.focus();
        return;
      }
      const results = searchItems(q);
      if (results.length > 0) {
        window.location.href = results[0].link;
        heroDropdown.setAttribute("hidden", "true");
      } else {
        renderHeroDropdown([], q);
      }
    });

    heroInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        heroBtn?.click();
      } else if (e.key === "Escape") {
        heroDropdown.setAttribute("hidden", "true");
      }
    });

    heroChips.forEach(chip => {
      chip.addEventListener("click", () => {
        const query = chip.getAttribute("data-query");
        if (query) {
          heroInput.value = query;
          const results = searchItems(query);
          renderHeroDropdown(results, query);
          heroInput.focus();
        }
      });
    });

    // Close on click outside
    document.addEventListener("click", (e) => {
      if (!heroWrapper?.contains(e.target)) {
        heroDropdown.setAttribute("hidden", "true");
      }
    });
  }

  /* ==========================================================================
     7. OWNER ADMIN CMS & LIVE SITE EDITOR
     ========================================================================== */
  function initAdminCMS() {
    const LEADS_KEY = "pr_prime_leads_db";
    const CMS_KEY = "pr_prime_cms_overrides";

    function getLeads() {
      try { return JSON.parse(localStorage.getItem(LEADS_KEY)) || []; }
      catch (e) { return []; }
    }

    function saveLead(data) {
      const leads = getLeads();
      leads.unshift({
        id: "LEAD-" + Date.now(),
        timestamp: new Date().toLocaleString("en-IN"),
        ...data
      });
      localStorage.setItem(LEADS_KEY, JSON.stringify(leads));
    }
    window.savePRLead = saveLead;

    function exportLeadsCSV() {
      const leads = getLeads();
      if (leads.length === 0) {
        alert("No inquiries recorded in database yet.");
        return;
      }

      let csv = "data:text/csv;charset=utf-8,ID,Timestamp,Name,Phone,Email,Location,Service,Budget,Details\n";
      leads.forEach(l => {
        csv += `${l.id},"${l.timestamp}","${l.name || ''}","${l.phone || ''}","${l.email || ''}","${l.location || ''}","${l.service || ''}","${l.budget || ''}","${(l.details || '').replace(/"/g, '""')}"\n`;
      });

      const link = document.createElement("a");
      link.href = encodeURI(csv);
      link.download = `PR_Prime_Leads_${Date.now()}.csv`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }

    let isEditing = false;
    function toggleLiveEdit() {
      isEditing = !isEditing;
      document.querySelectorAll("[data-editable-id]").forEach(el => {
        if (isEditing) {
          el.setAttribute("contenteditable", "true");
          el.style.outline = "2px dashed #D4AF37";
          el.style.backgroundColor = "rgba(212, 175, 55, 0.08)";
        } else {
          el.removeAttribute("contenteditable");
          el.style.outline = "none";
          el.style.backgroundColor = "transparent";
        }
      });

      const badge = document.getElementById("adminModeStatusBadge");
      if (badge) {
        badge.textContent = isEditing ? "Live Edit: ACTIVE" : "Live Edit: OFF";
        badge.style.color = isEditing ? "#10B981" : "#94A3B8";
      }

      if (isEditing) {
        showToast("Live Edit Mode Active: Click any highlighted text to modify.");
      } else {
        const overrides = {};
        document.querySelectorAll("[data-editable-id]").forEach(el => {
          overrides[el.getAttribute("data-editable-id")] = el.innerHTML;
        });
        localStorage.setItem(CMS_KEY, JSON.stringify(overrides));
        showToast("Live changes saved successfully!");
      }
    }

    function loadOverrides() {
      try {
        const overrides = JSON.parse(localStorage.getItem(CMS_KEY));
        if (!overrides) return;
        Object.keys(overrides).forEach(id => {
          const el = document.querySelector(`[data-editable-id="${id}"]`);
          if (el) el.innerHTML = overrides[id];
        });
      } catch (e) {}
    }

    function openAdminModal() {
      const modal = document.getElementById("adminDrawerModal");
      const leads = getLeads();
      const countEl = document.getElementById("adminTotalLeadsCount");
      const tableBody = document.getElementById("adminLeadsTableBody");

      if (modal) {
        modal.classList.add("open");
        if (countEl) countEl.textContent = `${leads.length} Customer Inquiries`;
        if (tableBody) {
          if (leads.length === 0) {
            tableBody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding:1.5rem; color:var(--text-tertiary);">No inquiries logged yet.</td></tr>`;
          } else {
            tableBody.innerHTML = leads.map(l => `
              <tr style="border-bottom:1px solid var(--border-subtle); font-size:0.85rem;">
                <td style="padding:0.75rem; color:var(--text-tertiary);">${l.timestamp}</td>
                <td style="padding:0.75rem; font-weight:700; color:var(--text-primary);">${l.name}</td>
                <td style="padding:0.75rem; color:var(--gold-400);"><a href="tel:${l.phone}">${l.phone}</a></td>
                <td style="padding:0.75rem;">${l.location || 'Lucknow'}</td>
                <td style="padding:0.75rem;"><span style="background:var(--bg-tertiary); padding:0.2rem 0.5rem; border-radius:4px;">${l.service}</span></td>
                <td style="padding:0.75rem; color:var(--accent-emerald); font-weight:700;">${l.budget || 'Custom'}</td>
              </tr>
            `).join("");
          }
        }
      }
    }

    loadOverrides();

    document.getElementById("openAdminDrawerBtn")?.addEventListener("click", (e) => {
      e.preventDefault();
      openAdminModal();
    });
    document.getElementById("closeAdminDrawerBtn")?.addEventListener("click", () => {
      document.getElementById("adminDrawerModal")?.classList.remove("open");
    });
    document.getElementById("toggleLiveEditBtn")?.addEventListener("click", toggleLiveEdit);
    document.getElementById("exportLeadsCsvBtn")?.addEventListener("click", exportLeadsCSV);
    document.getElementById("resetCmsDefaultsBtn")?.addEventListener("click", () => {
      if (confirm("Reset all edited text to defaults?")) {
        localStorage.removeItem(CMS_KEY);
        location.reload();
      }
    });

    document.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === "e") {
        e.preventDefault();
        openAdminModal();
      }
    });
  }

  /* ==========================================================================
     8. GENERAL APP CONTROLS (NAV, STATS, FORM, LEGAL)
     ========================================================================== */
  function initApp() {
    // Mobile Drawer
    const mobileToggle = document.getElementById("mobileMenuToggleBtn");
    const mobileDrawer = document.getElementById("mobileNavDrawer");
    const mobileOverlay = document.getElementById("mobileDrawerOverlay");
    const mobileClose = document.getElementById("mobileDrawerCloseBtn");

    function openMobile() {
      mobileDrawer?.classList.add("open");
      mobileOverlay?.classList.add("open");
      document.body.style.overflow = "hidden";
    }
    function closeMobile() {
      mobileDrawer?.classList.remove("open");
      mobileOverlay?.classList.remove("open");
      document.body.style.overflow = "";
    }

    mobileToggle?.addEventListener("click", openMobile);
    mobileClose?.addEventListener("click", closeMobile);
    mobileOverlay?.addEventListener("click", closeMobile);
    document.querySelectorAll(".mobile-nav-link").forEach(l => l.addEventListener("click", closeMobile));

    // Sticky Header Scroll
    window.addEventListener("scroll", () => {
      const header = document.getElementById("siteHeader");
      if (window.scrollY > 40) {
        header?.classList.add("scrolled");
      } else {
        header?.classList.remove("scrolled");
      }
    });

    // Portfolio Category Tabs
    const filterTabs = document.querySelectorAll(".filter-tab-btn");
    const cards = document.querySelectorAll(".project-card");
    filterTabs.forEach(tab => {
      tab.addEventListener("click", function () {
        filterTabs.forEach(t => t.classList.remove("active"));
        this.classList.add("active");
        const cat = this.getAttribute("data-filter");
        cards.forEach(card => {
          if (cat === "all" || card.getAttribute("data-category") === cat) {
            card.style.display = "block";
          } else {
            card.style.display = "none";
          }
        });
      });
    });

    // Animated Numbers Counter
    let counterRun = false;
    function runCounters() {
      const stats = document.querySelector(".hero-stats-row");
      if (!stats || counterRun) return;
      const rect = stats.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        counterRun = true;
        document.querySelectorAll(".stat-number[data-target]").forEach(el => {
          const target = parseFloat(el.getAttribute("data-target"));
          const suffix = el.getAttribute("data-suffix") || "";
          let curr = 0;
          const step = target / 35;
          const timer = setInterval(() => {
            curr += step;
            if (curr >= target) {
              el.textContent = `${target}${suffix}`;
              clearInterval(timer);
            } else {
              el.textContent = `${Math.floor(curr)}${suffix}`;
            }
          }, 30);
        });
      }
    }
    window.addEventListener("scroll", runCounters);
    runCounters();

    // Location Quick Chips on Lead Query Form & Contact Project Form
    document.querySelectorAll(".location-chip").forEach(chip => {
      chip.addEventListener("click", function () {
        const targetId = this.getAttribute("data-loc-target") || "leadLocationField";
        const locInput = document.getElementById(targetId);
        const locVal = this.getAttribute("data-loc");
        if (locInput && locVal) {
          locInput.value = locVal;
          // Highlight active sibling chip
          this.parentElement?.querySelectorAll(".location-chip").forEach(c => c.classList.remove("active"));
          this.classList.add("active");
        }
      });
    });

    // Dual Enquiry Tabs (contact.html)
    const tabBtnProject = document.getElementById("tabBtnProject");
    const tabBtnAdmission = document.getElementById("tabBtnAdmission");
    const wrapProject = document.getElementById("contactProjectFormWrap");
    const wrapAdmission = document.getElementById("contactAdmissionFormWrap");

    if (tabBtnProject && tabBtnAdmission && wrapProject && wrapAdmission) {
      tabBtnProject.addEventListener("click", () => {
        tabBtnProject.classList.add("active");
        tabBtnProject.setAttribute("aria-selected", "true");
        tabBtnAdmission.classList.remove("active");
        tabBtnAdmission.setAttribute("aria-selected", "false");
        wrapProject.style.display = "block";
        wrapAdmission.style.display = "none";
      });

      tabBtnAdmission.addEventListener("click", () => {
        tabBtnAdmission.classList.add("active");
        tabBtnAdmission.setAttribute("aria-selected", "true");
        tabBtnProject.classList.remove("active");
        tabBtnProject.setAttribute("aria-selected", "false");
        wrapAdmission.style.display = "block";
        wrapProject.style.display = "none";
      });
    }

    // Contact Page Project Lead Form Submission (contact.html)
    const contactProjectForm = document.getElementById("contactProjectLeadForm");
    if (contactProjectForm) {
      contactProjectForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("cpLeadName")?.value.trim();
        const phone = document.getElementById("cpLeadPhone")?.value.trim();
        const email = document.getElementById("cpLeadEmail")?.value.trim();
        const location = document.getElementById("cpLeadAddress")?.value.trim();
        const service = document.getElementById("cpLeadService")?.value;
        const budget = document.getElementById("cpLeadBudget")?.value;
        const details = document.getElementById("cpLeadMessage")?.value.trim();

        if (!name || !phone) {
          alert("Please provide your name and phone number.");
          return;
        }

        if (window.savePRLead) {
          window.savePRLead({ name, phone, email, location, service, budget, details });
        }

        if (successBox) {
          if (successDetails) {
            successDetails.innerHTML = `
              Thank you, <strong>${name}</strong>! We have received your project inquiry for <strong>${service}</strong>.<br>
              Pratyush Raj will connect with you on <strong>${phone}</strong> within 2 business hours.
            `;
          }
          successBox.removeAttribute("hidden");
          successBox.scrollIntoView({ behavior: "smooth", block: "center" });
        }

        showToast(`Thank you, ${name}! Your project inquiry has been received.`);

        const waMsg = encodeURIComponent(
          `*NEW PROJECT INQUIRY - PR PRIME PROJECTS*\n` +
          `• *Client Name:* ${name}\n` +
          `• *Phone:* ${phone}\n` +
          `• *Email:* ${email || 'N/A'}\n` +
          `• *Site Location:* ${location}\n` +
          `• *Service:* ${service}\n` +
          `• *Budget:* ${budget}\n` +
          `• *Project Specs:* ${details || 'Consultation requested.'}`
        );

        setTimeout(() => {
          window.open(`https://wa.me/918887698855?text=${waMsg}`, "_blank");
        }, 700);

        contactProjectForm.reset();
        wrapProject.style.display = "none";
      });
    }

    // Query / Lead Form Submission (index.html)
    const form = document.getElementById("mainLeadQueryForm");
    form?.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("leadNameField")?.value.trim();
      const phone = document.getElementById("leadPhoneField")?.value.trim();
      const email = document.getElementById("leadEmailField")?.value.trim();
      const location = document.getElementById("leadLocationField")?.value.trim();
      const service = document.getElementById("leadServiceField")?.value;
      const budget = document.getElementById("leadBudgetField")?.value;
      const details = document.getElementById("leadDetailsField")?.value.trim();

      if (!name || !phone) {
        alert("Please provide your name and phone number.");
        return;
      }

      if (window.savePRLead) {
        window.savePRLead({ name, phone, email, location, service, budget, details });
      }

      showToast(`Thank you, ${name}! Your inquiry has been sent to Pratyush Raj.`);

      const waMsg = encodeURIComponent(
        `*NEW INQUIRY - PR PRIME PROJECTS*\n` +
        `• *Client Name:* ${name}\n` +
        `• *Phone:* ${phone}\n` +
        `• *Email:* ${email || 'N/A'}\n` +
        `• *Site Location:* ${location || 'Lucknow'}\n` +
        `• *Service Needed:* ${service}\n` +
        `• *Budget Range:* ${budget || 'Flexible'}\n` +
        `• *Requirements:* ${details || 'Consultation requested.'}`
      );

      setTimeout(() => {
        window.open(`https://wa.me/918887698855?text=${waMsg}`, "_blank");
      }, 600);

      form.reset();
    });

    // Legal Modals
    const privModal = document.getElementById("privacyModal");
    const termsModal = document.getElementById("termsModal");
    document.querySelectorAll("[data-open-privacy]").forEach(l => l.addEventListener("click", (e) => {
      e.preventDefault();
      privModal?.classList.add("open");
    }));
    document.querySelectorAll("[data-open-terms]").forEach(l => l.addEventListener("click", (e) => {
      e.preventDefault();
      termsModal?.classList.add("open");
    }));
    // Admission & Enrollment Enquiry Form Handler (contact.html)
    const admissionForm = document.getElementById("admissionEnquiryForm");
    const successBox = document.getElementById("formSuccessMessage");
    const successDetails = document.getElementById("successMessageDetails");
    const resetBtn = document.getElementById("resetEnquiryFormBtn");

    if (admissionForm) {
      const parentInput = document.getElementById("parentName");
      const mobileInput = document.getElementById("mobileNumber");
      const childInput = document.getElementById("childName");
      const classSelect = document.getElementById("classSeeking");
      const messageInput = document.getElementById("enquiryMessage");

      const parentError = document.getElementById("parentNameError");
      const mobileError = document.getElementById("mobileNumberError");
      const childError = document.getElementById("childNameError");
      const classError = document.getElementById("classSeekingError");

      function clearError(input, errorEl) {
        if (input) {
          input.classList.remove("input-error");
          input.removeAttribute("aria-invalid");
        }
        if (errorEl) {
          errorEl.textContent = "";
        }
      }

      function setError(input, errorEl, message) {
        if (input) {
          input.classList.add("input-error");
          input.setAttribute("aria-invalid", "true");
        }
        if (errorEl) {
          errorEl.textContent = message;
        }
      }

      // Real-time error clearing on input
      parentInput?.addEventListener("input", () => clearError(parentInput, parentError));
      mobileInput?.addEventListener("input", () => {
        // Enforce numeric only
        mobileInput.value = mobileInput.value.replace(/\D/g, "");
        clearError(mobileInput, mobileError);
      });
      childInput?.addEventListener("input", () => clearError(childInput, childError));
      classSelect?.addEventListener("change", () => clearError(classSelect, classError));

      admissionForm.addEventListener("submit", function (e) {
        e.preventDefault();

        let isValid = true;
        let firstInvalidField = null;

        // 1. Validate Parent Name
        const parentVal = parentInput?.value.trim() || "";
        if (!parentVal) {
          setError(parentInput, parentError, "Please enter the parent's full name.");
          isValid = false;
          if (!firstInvalidField) firstInvalidField = parentInput;
        } else if (parentVal.length < 2) {
          setError(parentInput, parentError, "Parent's name must be at least 2 characters.");
          isValid = false;
          if (!firstInvalidField) firstInvalidField = parentInput;
        } else {
          clearError(parentInput, parentError);
        }

        // 2. Validate Mobile Number (Must be exactly 10 digits)
        const mobileVal = mobileInput?.value.trim() || "";
        const mobileRegex = /^\d{10}$/;
        if (!mobileVal) {
          setError(mobileInput, mobileError, "Please enter your 10-digit mobile number.");
          isValid = false;
          if (!firstInvalidField) firstInvalidField = mobileInput;
        } else if (!mobileRegex.test(mobileVal)) {
          setError(mobileInput, mobileError, "Mobile number must be exactly 10 digits (e.g. 9876543210).");
          isValid = false;
          if (!firstInvalidField) firstInvalidField = mobileInput;
        } else {
          clearError(mobileInput, mobileError);
        }

        // 3. Validate Child Name
        const childVal = childInput?.value.trim() || "";
        if (!childVal) {
          setError(childInput, childError, "Please enter the child's full name.");
          isValid = false;
          if (!firstInvalidField) firstInvalidField = childInput;
        } else if (childVal.length < 2) {
          setError(childInput, childError, "Child's name must be at least 2 characters.");
          isValid = false;
          if (!firstInvalidField) firstInvalidField = childInput;
        } else {
          clearError(childInput, childError);
        }

        // 4. Validate Class Seeking Admission
        const classVal = classSelect?.value || "";
        if (!classVal) {
          setError(classSelect, classError, "Please select the class seeking admission.");
          isValid = false;
          if (!firstInvalidField) firstInvalidField = classSelect;
        } else {
          clearError(classSelect, classError);
        }

        // If validation fails, focus the first invalid field
        if (!isValid) {
          firstInvalidField?.focus();
          return;
        }

        // Save enquiry to local storage database
        const enquiryData = {
          id: "ADM-" + Date.now(),
          timestamp: new Date().toLocaleString("en-IN"),
          parentName: parentVal,
          mobileNumber: mobileVal,
          childName: childVal,
          classSeeking: classVal,
          message: messageInput?.value.trim() || ""
        };

        try {
          const stored = JSON.parse(localStorage.getItem("pr_prime_admissions_db")) || [];
          stored.unshift(enquiryData);
          localStorage.setItem("pr_prime_admissions_db", JSON.stringify(stored));
        } catch (err) {
          console.warn("Could not save to localStorage", err);
        }

        // Show in-page success confirmation (No alert!)
        if (successBox) {
          if (successDetails) {
            successDetails.innerHTML = `
              Thank you, <strong>${parentVal}</strong>! We have registered the admission enquiry for <strong>${childVal}</strong> for <strong>${classVal}</strong>.<br>
              Our admissions counselor will call you on <strong>+91 ${mobileVal}</strong> within 24 hours.
            `;
          }
          successBox.removeAttribute("hidden");
          successBox.scrollIntoView({ behavior: "smooth", block: "center" });
        }

        // Reset and hide form inputs until user requests another entry
        admissionForm.style.display = "none";
      });

      resetBtn?.addEventListener("click", function () {
        admissionForm.reset();
        clearError(parentInput, parentError);
        clearError(mobileInput, mobileError);
        clearError(childInput, childError);
        clearError(classSelect, classError);
        successBox?.setAttribute("hidden", "true");
        admissionForm.style.display = "block";
        parentInput?.focus();
      });
    }
  }

  /* ==========================================================================
     9. SCROLL REVEAL ANIMATIONS (INTERSECTION OBSERVER)
     ========================================================================== */
  function initScrollAnimations() {
    const reveals = document.querySelectorAll(".reveal-on-scroll, .reveal-fade-left, .reveal-fade-right, .reveal-scale");
    if (!reveals.length) return;

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            obs.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px"
      });

      reveals.forEach(el => observer.observe(el));
    } else {
      // Fallback: immediately reveal all
      reveals.forEach(el => el.classList.add("revealed"));
    }
  }

  /* ==========================================================================
     INITIALIZATION ON DOM LOAD
     ========================================================================== */
  document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initEstimator();
    initChatbot();
    initSearch();
    initHeroSearch();
    initAdminCMS();
    initApp();
    initScrollAnimations();
  });
})();
