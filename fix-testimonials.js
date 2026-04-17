const fs = require('fs');

try {
    let content = fs.readFileSync('index.html', 'utf8');

    const testimonials = `
    <!-- Redesigned Testimonials Section: Glassmorphic Slider -->
    <section class="py-24 bg-surface-container-low overflow-hidden">
        <div class="editorial-container">
            <h2 class="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight">Client Praise</h2>
            <div class="testimonial-slider flex gap-8 overflow-x-auto pb-12 no-scrollbar">
                <!-- Testimonial 1 -->
                <div class="testimonial-card flex-shrink-0 w-full md:w-[450px] glass-card p-10 rounded-[3rem] shadow-xl relative group hover:-translate-y-2 transition-transform duration-500">
                    <span class="material-symbols-outlined text-primary/10 text-8xl absolute -top-4 -right-4 rotate-12 select-none">format_quote</span>
                    <div class="relative z-10">
                        <p class="text-on-surface-variant mb-10 text-xl leading-relaxed italic">"Ali's AI content workflow completely transformed our social presence. We saw a 300% increase in leads within the first month. Remarkable efficiency."</p>
                        <div class="flex items-center gap-4">
                            <div class="w-16 h-16 rounded-full overflow-hidden bg-slate-200 border-2 border-primary-fixed">
                                <img alt="Sarah Jenkins" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0v4hW4C6D5vV8H2v_J9v6Y9v8H2v_J9v6Y9v8H2v_J9v6Y9v8H2v_J9v6Y9v8H2v_J9v6Y9v8H2v_J9v6Y9v8H2v_J9v6Y9"/>
                            </div>
                            <div>
                                <div class="font-bold text-lg">Sarah Jenkins</div>
                                <div class="text-xs font-mono uppercase tracking-widest text-primary font-bold">CEO, TechFlow</div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Testimonial 2 -->
                <div class="testimonial-card flex-shrink-0 w-full md:w-[450px] glass-card p-10 rounded-[3rem] shadow-xl relative group hover:-translate-y-2 transition-transform duration-500">
                    <span class="material-symbols-outlined text-primary/10 text-8xl absolute -top-4 -right-4 rotate-12 select-none">format_quote</span>
                    <div class="relative z-10">
                        <p class="text-on-surface-variant mb-10 text-xl leading-relaxed italic">"The quality of the AI reels is indistinguishable from high-end studio productions, but delivered in half the time. He truly understands the tech."</p>
                        <div class="flex items-center gap-4">
                            <div class="w-16 h-16 rounded-full overflow-hidden bg-slate-200 border-2 border-secondary-fixed">
                                <img alt="Michael Chen" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0v4hW4C6D5vV8H2v_J9v6Y9v8H2v_J9v6Y9v8H2v_J9v6Y9v8H2v_J9v6Y9v8H2v_J9v6Y9v8H2v_J9v6Y9v8H2v_J9v6Y9"/>
                            </div>
                            <div>
                                <div class="font-bold text-lg">Michael Chen</div>
                                <div class="text-xs font-mono uppercase tracking-widest text-primary font-bold">Director, Prism Digital</div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Testimonial 3 -->
                <div class="testimonial-card flex-shrink-0 w-full md:w-[450px] glass-card p-10 rounded-[3rem] shadow-xl relative group hover:-translate-y-2 transition-transform duration-500">
                    <span class="material-symbols-outlined text-primary/10 text-8xl absolute -top-4 -right-4 rotate-12 select-none">format_quote</span>
                    <div class="relative z-10">
                        <p class="text-on-surface-variant mb-10 text-xl leading-relaxed italic">"Working with Ali is a game-changer. His growth systems are automated, data-driven, and highly effective for scaling a beauty brand globally."</p>
                        <div class="flex items-center gap-4">
                            <div class="w-16 h-16 rounded-full overflow-hidden bg-slate-200 border-2 border-tertiary-fixed">
                                <img alt="Elena Rodriguez" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0v4hW4C6D5vV8H2v_J9v6Y9v8H2v_J9v6Y9v8H2v_J9v6Y9v8H2v_J9v6Y9v8H2v_J9v6Y9v8H2v_J9v6Y9v8H2v_J9v6Y9"/>
                            </div>
                            <div>
                                <div class="font-bold text-lg">Elena Rodriguez</div>
                                <div class="text-xs font-mono uppercase tracking-widest text-primary font-bold">Founder, Aura Beauty</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
`;

    // Only inject if it doesn't exist yet
    if (!content.includes('Client Praise')) {
        content = content.replace('    <!-- Expertise Grid -->', testimonials + '\\n    <!-- Expertise Grid -->');
        fs.writeFileSync('index.html', content);
        console.log('Successfully added testimonials section.');
    } else {
        console.log('Testimonials section already exists.');
    }

} catch (e) {
    console.error(e);
}
