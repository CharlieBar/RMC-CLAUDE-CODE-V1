// Blog posts data
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorTitle: string;
  publishedAt: string;
  category: string;
  tags: string[];
  readTime: string;
  metaDescription: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "understanding-epidural-steroid-injections",
    title: "Epidural Steroid Injections: What Actually Happens",
    excerpt:
      "If your doctor mentioned an epidural injection and you're wondering what you're getting into, here's the honest breakdown—what happens, how it works, and what to expect afterward.",
    content: `
## So What Is an Epidural Steroid Injection?

An epidural steroid injection (ESI) puts anti-inflammatory medication right where you need it—in the space around your spinal nerves. Instead of taking pills that affect your whole body, this targets the exact spot causing your pain. It's commonly used for herniated discs, spinal stenosis, and sciatica.

## How Does It Actually Help?

When nerves in your spine get irritated or compressed, they get inflamed. That inflammation is what causes the pain shooting down your leg or making your back miserable. The steroid medication calms down that inflammation, which takes pressure off the nerve and (hopefully) gives you real relief.

## What Happens During the Procedure

The whole thing takes about 15-30 minutes, and you go home the same day:

1. **You lie down**: Face down on the table. They'll clean the area and numb the skin so you don't feel the needle.

2. **They guide the needle**: Using live X-ray (fluoroscopy), your doctor watches on a screen to get the needle in exactly the right spot.

3. **They inject the medication**: A little contrast dye confirms the placement, then the steroid goes in.

4. **You rest a bit**: About 15-30 minutes in recovery while we make sure you're doing fine, then someone drives you home.

## What Happens After

Most people are back to normal within a day. You might feel some numbness in your legs for a few hours, and honestly, some people feel worse for a day or two before it gets better. But many patients notice significant relief within a week.

## Is This Right for You?

ESIs work best when inflammation is the main problem—which is often the case with disc issues and sciatica. They're usually recommended after you've already tried things like PT and anti-inflammatory meds without enough relief. Talk to your pain specialist to see if it makes sense for your situation.
    `.trim(),
    author: "Dr. Krishna C. Chunduri",
    authorTitle: "Pain Management Specialist",
    publishedAt: "2024-11-15",
    category: "Pain Management",
    tags: ["epidural", "spine", "injections", "pain relief"],
    readTime: "4 min read",
    metaDescription:
      "Wondering what happens during an epidural steroid injection? Here's what to expect—the procedure, the recovery, and how to know if it's right for your back or leg pain.",
  },
  {
    slug: "preparing-for-knee-replacement-surgery",
    title: "Getting Ready for Knee Replacement: A Practical Guide",
    excerpt:
      "Knee replacement is a big deal, but the better you prepare, the easier your recovery will be. Here's what you should actually do in the weeks before surgery.",
    content: `
## Why Bother Preparing?

Look, knee replacement is major surgery. It can be life-changing in the best way—people go from barely walking to hiking again. But how well you prepare directly affects how quickly you bounce back. Don't skip this stuff.

## A Few Weeks Before Surgery

### Get Your Body Ready

- **Start PT now**: Seriously. The stronger your leg muscles are going in, the faster you'll recover. Your surgeon will probably recommend exercises.
- **Lose weight if you can**: Every extra pound puts 4 pounds of pressure on your knee. Even losing 5-10 pounds helps.
- **Quit smoking**: It slows healing and raises infection risk. Your surgery, your choice—but know the trade-off.
- **Get other health stuff under control**: High blood sugar, blood pressure issues—work with your doctors to get these managed before surgery.

### Set Up Your Home

- **Clear the floor**: Rugs, cords, clutter—anything you could trip on has to go.
- **Bathroom prep**: A shower chair and grab bars aren't just for old people. You'll thank yourself.
- **Move stuff to waist level**: Anything you use daily—put it where you don't have to bend or reach.
- **Stock the freezer**: Cook ahead or buy easy meals. You won't feel like cooking for a while.

## The Week Before

- Get your lab work and clearances done
- Stop blood thinners or other meds your surgeon tells you to stop
- Line up your ride home and someone to stay with you for a few days
- Pack a bag—loose clothes, phone charger, anything you need for 1-2 nights

## Surgery Day

- Nothing to eat or drink after midnight (usually)
- Only take the meds your surgeon specifically approved
- Wear something comfortable and easy to get on and off
- Leave the jewelry and valuables at home

## After Surgery

Most people stay 1-2 nights. You'll be up and moving with PT the same day as surgery—yes, really. Full recovery takes 3-6 months, but most people feel a huge difference within a few weeks.

## Questions Worth Asking

- What type of implant works best for my situation?
- What are my specific risks?
- How much PT will I need?
- When can I drive? Go back to work? Play golf again?
    `.trim(),
    author: "Dr. Christos S. Giannoulias",
    authorTitle: "Orthopedic Surgeon",
    publishedAt: "2024-10-22",
    category: "Orthopedics",
    tags: ["knee replacement", "surgery", "preparation", "recovery"],
    readTime: "5 min read",
    metaDescription:
      "Getting knee replacement surgery? Here's a practical guide to preparing your body and home, plus what to expect the day of and after.",
  },
  {
    slug: "benefits-of-physical-therapy-after-surgery",
    title: "Why PT After Surgery Actually Matters",
    excerpt:
      "You just had surgery—do you really need physical therapy too? Short answer: yes. Here's why skipping PT is one of the biggest mistakes you can make in your recovery.",
    content: `
## Why You Can't Skip Physical Therapy

Here's the thing about surgery: the operation itself is only half the battle. Whether you had a knee replacement, shoulder repair, or spine procedure, what you do in the weeks after determines how good your outcome is. Physical therapy isn't optional if you want to get back to your life.

## What PT Actually Does for You

### You'll Heal Faster

This isn't just something we say. Research shows it over and over—people who do PT recover faster than people who don't. Your therapist knows exactly how hard to push without overdoing it.

### It Reduces Pain (Yes, Really)

Seems backwards, right? You're sore from surgery, so why would moving help? But the right movements reduce swelling, prevent stiffness, and actually decrease pain. Your PT uses hands-on techniques, exercises, and sometimes ice or heat to help you feel better.

### You Avoid Complications

When you don't move enough after surgery, scar tissue forms in ways that can limit your mobility permanently. PT keeps things flexible while you heal. Plus, it reduces your risk of blood clots from sitting around too much.

### You Get Your Strength Back

Surgery takes a toll on your muscles. Some get cut, others get weak from not being used. PT rebuilds that strength progressively, so you're not just healed—you're actually functional.

### You Learn What's Safe

Maybe the most underrated part: your PT tells you exactly what you can and can't do. When can you bend that way? When can you lift things? This takes away so much anxiety and prevents you from accidentally setting yourself back.

## What PT Looks Like

Your program is customized to you—your surgery, your body, your goals. Usually you'll go 2-3 times a week and do exercises at home daily. It starts easy and gets harder as you get stronger.

## How to Get the Most Out of It

- **Show up**: Every session matters. Don't skip.
- **Do your home exercises**: What you do at home matters as much as what you do in the clinic.
- **Talk to your therapist**: If something hurts weird or feels wrong, say something.
- **Be patient**: This takes time. Pushing too hard too fast just sets you back.
    `.trim(),
    author: "Physical Therapy Team",
    authorTitle: "Rand Medical Center",
    publishedAt: "2024-09-18",
    category: "Physical Therapy",
    tags: ["physical therapy", "surgery", "recovery", "rehabilitation"],
    readTime: "4 min read",
    metaDescription:
      "Had surgery? Here's why physical therapy isn't optional—how it speeds healing, reduces pain, and gets you back to doing what you love.",
  },
  {
    slug: "when-to-see-doctor-for-back-pain",
    title: "Back Pain: When to Actually See a Doctor",
    excerpt:
      "Most back pain goes away on its own. But sometimes it doesn't—and sometimes it's a sign of something serious. Here's how to tell the difference.",
    content: `
## The Good News First

Most back pain isn't serious. You pulled something, you overdid it, you slept in a weird position—and within a few weeks, it goes away on its own. Ice, rest, over-the-counter meds, and gentle stretching are usually enough.

But not always. Here's how to know when you should actually see someone.

## Red Flags: Get Help Now

These symptoms with back pain mean you need to be seen right away—call your doctor or go to the ER:

- **You can't control your bladder or bowels**: This could mean nerves are being compressed and need urgent treatment.
- **Your legs are getting weaker**: Especially if it's getting worse quickly.
- **You have numbness in your groin or inner thighs**: Another sign of nerve compression.
- **Your stomach hurts badly too**: Back pain with severe abdominal pain could be something internal.
- **You have a fever**: Back pain plus fever might mean infection.

## Time to Make an Appointment

You don't need the ER, but you should get it checked out soon if:

- It's been 2-3 weeks and you're not getting better
- The pain shoots down your leg, especially below your knee
- You have numbness, tingling, or weakness in your legs
- You're losing weight without trying
- It hurts more at night or when you lie down
- You've had cancer or osteoporosis, or you recently injured yourself
- The pain started out of nowhere after age 50

## What Happens When You Come In

We'll ask about your pain—when it started, what makes it better or worse, what else you're feeling. Then we'll do a physical exam to test your movement, strength, and reflexes.

Not everyone needs imaging right away. But if something in your story or exam suggests we should look deeper, we'll order an X-ray or MRI.

## What Treatment Looks Like

Depends on what's going on. Options include:

- **Physical therapy**: Often the best treatment. Strengthens the muscles that support your spine.
- **Medications**: Anti-inflammatories, muscle relaxants, or nerve pain meds.
- **Injections**: Epidural steroids can calm down irritated nerves.
- **Specialist referral**: If you need surgery or more advanced care.

## The Bottom Line

Back pain is super common, and most of the time it's nothing to worry about. But if something feels off—if it's not getting better, if it came with other symptoms—trust your gut and get it checked. That's what we're here for.
    `.trim(),
    author: "Dr. Demetrios Giokaris",
    authorTitle: "Chief Physician",
    publishedAt: "2024-08-05",
    category: "Health Education",
    tags: ["back pain", "symptoms", "when to see doctor", "spine health"],
    readTime: "4 min read",
    metaDescription:
      "Not sure if your back pain needs a doctor? Here's how to tell the difference between normal aches and something that needs attention.",
  },
];

export const BLOG_CATEGORIES = [
  "Pain Management",
  "Orthopedics",
  "Physical Therapy",
  "Health Education",
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return BLOG_POSTS.map((p) => p.slug);
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return BLOG_POSTS.filter((p) => p.category === category);
}
