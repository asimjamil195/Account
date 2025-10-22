const TRACK_LIBRARY = {
    frontend: {
        name: "Frontend experience design",
        summary:
            "Craft interfaces that feel intentional, accessible, and polished with a blend of semantic HTML, design systems, and interaction design.",
        modules: [
            {
                title: "Foundations of semantic structure",
                spotlight: "Structure accessible layouts with purposeful HTML.",
                concept:
                    "Discover how semantic HTML and natural document flow lay the groundwork for responsive, accessible interfaces before you touch a design tool.",
                conceptBoost: {
                    beginner: "We will pair each new tag with a concrete mental model so nothing feels abstract.",
                    intermediate: "We'll connect semantics to the components you already ship and highlight how it improves maintainability.",
                    advanced: "Expect nuanced discussions about semantics in design systems and how they inform team workflows.",
                },
                practice:
                    "Rebuild a marketing landing page wireframe using semantic sections, purposeful headings, and navigation landmarks.",
                practiceBoost: {
                    beginner: "Keep it simple: hero, features, testimonial, and a clear call-to-action.",
                    intermediate: "Document why you chose each landmark and how it helps future collaborators.",
                    advanced: "Capture accessibility notes and propose audit steps your team can adopt.",
                },
            },
            {
                title: "Design systems & component thinking",
                spotlight: "Scale interfaces with tokens and reusable components.",
                concept:
                    "Break complex screens into design tokens and component primitives so every iteration feels cohesive and fast to assemble.",
                conceptBoost: {
                    beginner: "Codexa will show how colours, spacing, and typography roll up into reusable tokens.",
                    intermediate: "We'll map shared UI into component APIs that slot into your existing workflow.",
                    advanced: "Expect to factor in accessibility, documentation, and cross-team collaboration.",
                },
                practice:
                    "Convert a static mock-up into a component library outline with documented props, states, and guardrails.",
                practiceBoost: {
                    beginner: "Start with just three core components and note where tokens keep things consistent.",
                    intermediate: "Write guidance for when to use or avoid each component.",
                    advanced: "Define contribution rules and quality checks before components go live.",
                },
            },
            {
                title: "Interaction & state choreography",
                spotlight: "Connect user flows to resilient state patterns.",
                concept:
                    "Link user intent to state transitions so your interactions feel natural across devices and input methods.",
                conceptBoost: {
                    beginner: "We'll decode terminology like 'state' and 'events' with relatable examples.",
                    intermediate: "Codexa will emphasise predictable patterns you can reuse across features.",
                    advanced: "We'll explore trade-offs between local, shared, and remote state and how to communicate them.",
                },
                practice:
                    "Prototype an interactive widget (tabs, pricing toggle, or onboarding flow) that communicates state changes clearly and accessibly.",
                practiceBoost: {
                    beginner: "Narrate the story of what the user is trying to achieve before you code.",
                    advanced: "Capture edge cases and describe how you’d monitor them in production.",
                },
            },
        ],
    },
    fullstack: {
        name: "Full-stack product delivery",
        summary:
            "Design robust web applications end-to-end — from modelling data to shipping features with confidence and observability.",
        modules: [
            {
                title: "Product-aligned API design",
                spotlight: "Model APIs around user journeys and clear contracts.",
                concept:
                    "Translate user stories into thoughtful API boundaries that balance simplicity, flexibility, and longevity.",
                conceptBoost: {
                    beginner: "Codexa will demystify REST, resources, and payloads using concrete examples.",
                    intermediate: "Expect to compare approaches and identify the trade-offs you’d present to stakeholders.",
                    advanced: "We’ll explore versioning, governance, and collaboration with other teams.",
                },
                practice:
                    "Sketch an API for a feature you care about, including endpoints, sample payloads, and guardrails for future contributors.",
                practiceBoost: {
                    beginner: "Focus on two or three core endpoints with happy-path behaviour.",
                    advanced: "Add error handling and instrumentation notes to your design.",
                },
            },
            {
                title: "Data modelling & persistence",
                spotlight: "Design data flows that balance flexibility and performance.",
                concept:
                    "Map entities, relationships, and lifecycle events so your application captures the right signals without brittle coupling.",
                conceptBoost: {
                    beginner: "We'll keep diagrams lightweight and focus on mental models.",
                    intermediate: "Codexa will highlight where to denormalise or index for fast reads.",
                    advanced: "Expect to reason about eventual consistency, migrations, and observability.",
                },
                practice:
                    "Draft a schema or document layout for a feature, then stress-test it against at least two edge-case scenarios.",
                practiceBoost: {
                    beginner: "Write through a user story to ensure the schema supports it.",
                    advanced: "Note migration steps and how you’d monitor data health post-release.",
                },
            },
            {
                title: "Delivery pipelines & quality loops",
                spotlight: "Ship confidently with automation and feedback loops.",
                concept:
                    "Design a delivery workflow that covers testing, code review, continuous integration, and post-release monitoring.",
                conceptBoost: {
                    beginner: "We'll translate pipeline jargon into plain-language steps.",
                    intermediate: "Codexa will help you pinpoint the next automation win.",
                    advanced: "Expect to map quality gates, risk mitigation, and communication plans.",
                },
                practice:
                    "Outline a delivery checklist for an upcoming feature, including testing strategy, rollout plan, and rollback signals.",
                practiceBoost: {
                    beginner: "Keep it focused on one environment and a smoke test.",
                    advanced: "Add observability dashboards and on-call expectations.",
                },
            },
        ],
    },
    python: {
        name: "Python automation & data",
        summary:
            "Automate workflows, wrangle data, and communicate insights with Python that ships value quickly.",
        modules: [
            {
                title: "Data storytelling foundations",
                spotlight: "Ask the right questions before writing code.",
                concept:
                    "Frame the problem, identify data sources, and plan transformations so your scripts answer the question that matters.",
                conceptBoost: {
                    beginner: "Codexa will connect each new library to the problem it solves.",
                    intermediate: "We'll emphasise reusable project structure and clear naming.",
                    advanced: "Expect to weigh trade-offs in tooling, scaling, and governance.",
                },
                practice:
                    "Draft a project brief outlining the dataset, assumptions, validation steps, and the story you’ll tell with the output.",
                practiceBoost: {
                    beginner: "Keep the brief lightweight — a paragraph and bullet list is enough.",
                    advanced: "Include data quality checks and how stakeholders will consume the result.",
                },
            },
            {
                title: "Transformations & automation",
                spotlight: "Turn messy data into dependable pipelines.",
                concept:
                    "Sequence data cleaning, transformation, and scheduling patterns so automation feels boring (in the best way).",
                conceptBoost: {
                    beginner: "We'll decode list comprehensions, generators, and when to reach for them.",
                    intermediate: "Codexa highlights reusable utilities and packaging strategies.",
                    advanced: "Expect to consider orchestration, observability, and failure recovery.",
                },
                practice:
                    "Build a small pipeline that ingests sample data, transforms it, and stores the output for downstream use.",
                practiceBoost: {
                    beginner: "Lean on notebooks or simple scripts before extracting functions.",
                    advanced: "Instrument the run with logging and alerting hooks.",
                },
            },
            {
                title: "Insights & communication",
                spotlight: "Translate analysis into decisions.",
                concept:
                    "Present findings clearly with visuals, narratives, and recommendations tailored to your audience.",
                conceptBoost: {
                    beginner: "Codexa will focus on choosing the right chart for the story.",
                    intermediate: "We'll tie insights to product or business outcomes.",
                    advanced: "Expect prompts for stakeholder alignment and decision theatre.",
                },
                practice:
                    "Create a concise report or dashboard that highlights one actionable insight and the supporting evidence.",
                practiceBoost: {
                    beginner: "Share a single visual with a one-sentence takeaway.",
                    advanced: "Draft the call-to-action you’ll give decision makers.",
                },
            },
        ],
    },
    product: {
        name: "Product discovery & prototyping",
        summary:
            "Blend research, strategy, and prototyping to uncover insights and ship experiments that matter.",
        modules: [
            {
                title: "Insight hunting",
                spotlight: "Turn observations into opportunity areas.",
                concept:
                    "Design research plans that surface real user pains and synthesise signals into themes you can act on.",
                conceptBoost: {
                    beginner: "Codexa will guide you through lightweight interview and survey techniques.",
                    intermediate: "We'll connect discovery methods to product strategy decisions.",
                    advanced: "Expect to plan cross-functional discovery rituals and stakeholder alignment.",
                },
                practice:
                    "Draft a research sprint outline with objectives, recruiting plans, and a synthesis framework.",
                practiceBoost: {
                    beginner: "Focus on one persona and three guiding questions.",
                    advanced: "Include how you’ll socialise findings with leadership.",
                },
            },
            {
                title: "Journey mapping & opportunity sizing",
                spotlight: "See the product through your customer’s eyes.",
                concept:
                    "Map the end-to-end journey, highlight friction points, and size the opportunity so you prioritise with confidence.",
                conceptBoost: {
                    beginner: "We'll anchor the journey to a single core scenario to keep it manageable.",
                    intermediate: "Codexa will suggest metrics and signals to size each opportunity.",
                    advanced: "Expect to explore systems thinking and organisational impact.",
                },
                practice:
                    "Create a journey map annotated with friction points, opportunity scores, and a hypothesis for improvement.",
                practiceBoost: {
                    beginner: "Use simple columns (do, think, feel) before layering data.",
                    advanced: "Tie each opportunity to success metrics and constraints.",
                },
            },
            {
                title: "Prototype & experiment loops",
                spotlight: "Test ideas quickly with clear learning goals.",
                concept:
                    "Choose the right fidelity prototype, define success signals, and plan experiments that answer high-value questions.",
                conceptBoost: {
                    beginner: "Codexa will help you pick scrappy tools and keep scope tight.",
                    intermediate: "We'll focus on experiment design and how to communicate risk.",
                    advanced: "Expect prompts for multi-team collaboration and experiment governance.",
                },
                practice:
                    "Plan an experiment: define hypothesis, prototype artefact, success metrics, and decision rules.",
                practiceBoost: {
                    beginner: "Limit scope to one hypothesis and a small participant group.",
                    advanced: "Include rollout considerations if the experiment succeeds.",
                },
            },
        ],
    },
};

const EXPERIENCE_NOTES = {
    beginner: {
        label: "Starting out",
        summary: "Expect fundamentals-first explanations before we stack on more complex ideas.",
        concept: "Codexa will translate jargon into everyday language and link each idea to a tangible example.",
        practice: "Keep your practice bite-sized and celebrate progress over polish.",
    },
    intermediate: {
        label: "Leveling up",
        summary: "We’ll connect familiar patterns to more advanced techniques and stretch your mental models.",
        concept: "Codexa will highlight the 'why' so you can refine the heuristics you already use.",
        practice: "Narrate your decisions aloud or in writing to deepen understanding as you practise.",
    },
    advanced: {
        label: "Sharpening expertise",
        summary: "We’ll emphasise trade-offs, leadership communication, and systems-level thinking.",
        concept: "Codexa surfaces nuance, edge cases, and coaching prompts for the teams you support.",
        practice: "Treat each mission like a playbook draft you could hand to someone you mentor.",
    },
};

const PACE_NOTES = {
    steady: {
        label: "Steady & reflective",
        summary: "We’ll keep a sustainable rhythm with space to reflect between modules.",
        practice: "After each mission, jot down what clicked and one question to explore tomorrow.",
    },
    sprint: {
        label: "Sprint mode",
        summary: "Expect quick wins and shippable slices so momentum stays high.",
        practice: "Cap each practice burst at about 20 minutes and share a tiny artefact when you finish.",
    },
    deep: {
        label: "Deep focus",
        summary: "We’ll linger on the big ideas and examine them from multiple angles.",
        practice: "Diagram the concept before coding and log insights in a learning journal.",
    },
};

const REFLECTION_MODULE = {
    title: "Reflection & next moves",
    spotlight: "Capture insights and plan the habit that keeps momentum.",
    concept: "Pause to consolidate what you learned, identify gaps, and set an accountability ritual for the next sprint.",
    practice: "Write a short retrospective or record a quick loom summarising wins, challenges, and the next concrete step.",
};

const state = {
    plan: [],
    experience: "beginner",
    pace: "steady",
    stage: "idle",
    index: 0,
    started: false,
};

const form = document.getElementById("curriculum-form");
const trackSelect = document.getElementById("track");
const paceSelect = document.getElementById("pace");
const customFocus = document.getElementById("customFocus");
const planSummary = document.getElementById("planSummary");
const moduleList = document.getElementById("moduleList");
const trackTag = document.getElementById("trackTag");
const experienceTag = document.getElementById("experienceTag");
const paceTag = document.getElementById("paceTag");
const lessonHint = document.getElementById("lessonHint");
const lessonBody = document.getElementById("lessonBody");
const lessonTitle = document.getElementById("lessonTitle");
const conceptText = document.getElementById("conceptText");
const practiceContainer = document.getElementById("practiceContainer");
const practiceText = document.getElementById("practiceText");
const lessonAction = document.getElementById("lessonAction");
const skipModuleButton = document.getElementById("skipModule");
const lessonProgress = document.getElementById("lessonProgress");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const experience = form.elements["experience"].value;
    const track = trackSelect.value;
    const pace = paceSelect.value;
    const customGoal = customFocus.value.trim();

    const curriculum = createCurriculum(track, experience, pace, customGoal);

    state.plan = curriculum.modules;
    state.experience = experience;
    state.pace = pace;
    state.stage = "idle";
    state.index = 0;
    state.started = false;

    renderPlan(curriculum, experience, pace);
    prepareLesson();

    if (moduleList.firstElementChild) {
        moduleList.firstElementChild.scrollIntoView({ behavior: "smooth", block: "start" });
    }
});

lessonAction.addEventListener("click", () => {
    if (!state.plan.length) {
        return;
    }

    if (state.stage === "idle") {
        state.stage = "concept";
        state.started = true;
        showCurrentModule();
        return;
    }

    if (state.stage === "concept") {
        state.stage = "practice";
        showCurrentModule();
        return;
    }

    if (state.stage === "practice") {
        state.index += 1;
        state.stage = "concept";
        showCurrentModule();
        return;
    }

    if (state.stage === "complete") {
        state.index = 0;
        state.stage = "concept";
        state.started = true;
        showCurrentModule();
    }
});

skipModuleButton.addEventListener("click", () => {
    if (skipModuleButton.disabled || !state.plan.length) {
        return;
    }

    if (state.stage === "complete") {
        return;
    }

    state.index += 1;
    state.stage = "concept";
    showCurrentModule(true);
});

function createCurriculum(trackId, experience, pace, customGoal) {
    const base = TRACK_LIBRARY[trackId];
    const experienceNote = EXPERIENCE_NOTES[experience];
    const paceNote = PACE_NOTES[pace];

    const modules = base.modules.map((module) => ({
        title: module.title,
        spotlight: module.spotlight,
        concept: compileConcept(module, experience),
        practice: compilePractice(module, experience),
        isCustom: false,
    }));

    if (customGoal) {
        modules.push(createCustomModule(customGoal));
    }

    modules.push({ ...REFLECTION_MODULE, isCustom: false });

    const summaryParts = [base.summary, experienceNote.summary, paceNote.summary];
    if (customGoal) {
        summaryParts.push(`Codexa will also weave your goal — “${customGoal}” — into the journey.`);
    }

    return {
        title: base.name,
        summary: summaryParts.join(" "),
        modules,
    };
}

function compileConcept(module, experience) {
    const parts = [module.concept];
    if (module.conceptBoost && module.conceptBoost[experience]) {
        parts.push(module.conceptBoost[experience]);
    }
    return parts.join(" ");
}

function compilePractice(module, experience) {
    const parts = [module.practice];
    if (module.practiceBoost && module.practiceBoost[experience]) {
        parts.push(module.practiceBoost[experience]);
    }
    return parts.join(" ");
}

function createCustomModule(goal) {
    const trimmed = goal.slice(0, 120);
    return {
        title: `Project lab: ${trimmed}`,
        spotlight: `Bring “${trimmed}” to life with Codexa as your copilot.`,
        concept: `Break “${trimmed}” into milestones, clarify success signals, and pick the stack that keeps scope honest.`,
        practice: `Outline the MVP for “${trimmed}”, storyboard the core experience, and ship the first visible slice.`,
        isCustom: true,
    };
}

function renderPlan(curriculum, experience, pace) {
    const experienceNote = EXPERIENCE_NOTES[experience];
    const paceNote = PACE_NOTES[pace];

    trackTag.textContent = `Focus: ${curriculum.title}`;
    experienceTag.textContent = `Experience: ${experienceNote.label}`;
    paceTag.textContent = `Pace: ${paceNote.label}`;

    planSummary.textContent = curriculum.summary;

    moduleList.innerHTML = "";

    curriculum.modules.forEach((module, index) => {
        const item = document.createElement("li");
        item.className = "module-item";
        if (module.isCustom) {
            item.classList.add("custom");
        }

        const indexBadge = document.createElement("span");
        indexBadge.className = "module-index";
        indexBadge.textContent = String(index + 1);

        const details = document.createElement("div");
        details.className = "module-details";

        const title = document.createElement("h4");
        title.textContent = module.title;

        const spotlight = document.createElement("p");
        spotlight.textContent = module.spotlight;

        details.append(title, spotlight);
        item.append(indexBadge, details);
        moduleList.append(item);
    });
}

function prepareLesson() {
    if (!state.plan.length) {
        lessonBody.classList.add("hidden");
        lessonHint.textContent = "Generate a curriculum to unlock your first module.";
        lessonProgress.textContent = "Waiting for a plan…";
        return;
    }

    const firstTitle = state.plan.length ? state.plan[0].title : "your first module";
    lessonBody.classList.remove("hidden");
    practiceContainer.classList.add("hidden");
    practiceText.textContent = "";

    lessonTitle.textContent = `Module 1: ${firstTitle}`;
    conceptText.textContent = "Press “Begin module 1” when you're ready for Codexa's concept briefing.";

    lessonHint.textContent = "Codexa queued your lessons. When you’re ready, tap Begin to hear the first concept.";
    lessonProgress.textContent = `Ready • ${state.plan.length} module${state.plan.length === 1 ? "" : "s"}`;

    lessonAction.disabled = false;
    lessonAction.textContent = "Begin module 1";
    skipModuleButton.disabled = true;
}

function showCurrentModule(skipped = false) {
    if (state.index >= state.plan.length) {
        finishPlan();
        return;
    }

    const module = state.plan[state.index];
    const stageLabel = state.stage === "practice" ? "Practice mission" : "Concept briefing";

    lessonTitle.textContent = module.title;
    conceptText.textContent = buildConceptText(module);

    if (state.stage === "concept") {
        practiceContainer.classList.add("hidden");
        lessonAction.textContent = "Give me a practice mission";
        lessonHint.textContent = skipped
            ? "Skipped ahead. Codexa loaded the next concept for you."
            : "Codexa is walking you through the concept — absorb it, then request the practice mission.";
    } else if (state.stage === "practice") {
        practiceContainer.classList.remove("hidden");
        practiceText.textContent = buildPracticeText(module);
        lessonAction.textContent = state.index === state.plan.length - 1 ? "Finish track" : "Mark as complete";
        lessonHint.textContent = "Time to practise! Capture your work and reflect before moving on.";
    }

    lessonProgress.textContent = `Module ${state.index + 1} of ${state.plan.length} • ${stageLabel}`;
    updateSkipAvailability();
}

function buildConceptText(module) {
    const parts = [module.concept];
    const experienceAddOn = EXPERIENCE_NOTES[state.experience]?.concept;
    if (experienceAddOn) {
        parts.push(experienceAddOn);
    }
    return parts.join(" ");
}

function buildPracticeText(module) {
    const parts = [module.practice];
    const experienceAddOn = EXPERIENCE_NOTES[state.experience]?.practice;
    const paceAddOn = PACE_NOTES[state.pace]?.practice;
    if (experienceAddOn) {
        parts.push(experienceAddOn);
    }
    if (paceAddOn) {
        parts.push(paceAddOn);
    }
    return parts.join(" ");
}

function finishPlan() {
    state.stage = "complete";
    lessonProgress.textContent = "Track complete";
    lessonHint.textContent = "Epic work! Regenerate the plan or replay modules whenever you’d like.";
    lessonTitle.textContent = "You’ve completed this track 🎉";
    conceptText.textContent =
        "Take a breath, celebrate the reps you put in, and note the next skill you want Codexa to help you sharpen.";
    practiceContainer.classList.add("hidden");
    lessonAction.textContent = "Replay from start";
    skipModuleButton.disabled = true;
}

function updateSkipAvailability() {
    const shouldDisable = state.plan.length <= 1 || !state.started || state.stage === "complete";
    skipModuleButton.disabled = shouldDisable;
}
