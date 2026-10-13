import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage"

export const metadata: Metadata = {
  title: "Privacy Policy | MVP InfoTech",
  description: "How MVP InfoTech collects, uses and protects data in Social Tool and on this website.",
};

export default function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy" updated="October 13, 2026" >
      <p className="mt-3 text-white/70">
        This policy explains how MVP InfoTech (&quot;we&quot;, &quot;us&quot;) handles personal data on this website and in
        Social Tool, our web application for writing and scheduling social media posts. We are a sole proprietorship
        based at Maldhari Society, Block no 5, RTO Road, Rajkot, Gujarat 360003, India.
      </p>

      <h2 className="text-xl font-semibold text-white/70">1. Information we collect</h2>
      <ul>
        <li className="text-white/70"><strong>Account data:</strong> your name, email address and a password (stored only as a one-way hash). If you sign in with Google we receive your name and verified email.</li>
        <li className="text-white/70"><strong>Connected account data:</strong> when you connect Facebook, we receive the list of Pages you choose to share, each Page name and ID, and an access token for each Page. Tokens are stored encrypted.</li>
        <li className="text-white/70"><strong>Content you create:</strong> post text, photos or videos you upload, and the times you schedule.</li>
        <li className="text-white/70"><strong>Technical data:</strong> a login session cookie and basic server logs (such as IP address and browser type) created by our hosting providers.</li>
        <li className="text-white/70"><strong>Messages:</strong> emails you send us, and the system emails we send you (verification and password reset).</li>
      </ul>

      <h2 className="text-xl font-semibold text-white/70">2. How we use it</h2>
      <ul>
        <li className="text-white/70">To run Social Tool: sign you in, show your Pages, and publish the posts you schedule at the time you choose.</li>
        <li className="text-white/70">To keep the service secure, prevent abuse and fix problems.</li>
        <li className="text-white/70">To answer your questions and meet legal obligations.</li>
      </ul>
      <p className="mt-3 text-white/70">We do not sell your data, we do not use it for advertising, and we do not build advertising profiles.</p>

      <h2 className="text-xl font-semibold text-white/70">3. Data from Meta (Facebook)</h2>
      <p className="mt-3 text-white/70">
        We ask Facebook for these permissions only: <em>pages_show_list</em> (to list your Pages),{" "}
        <em>pages_manage_posts</em> (to publish the posts you write), <em>pages_read_engagement</em> (needed together with
        publishing) and <em>business_management</em> (to find Pages owned by a business portfolio). We use this data
        only to provide those features to you. We follow the Meta Platform Terms and do not transfer this data to data
        brokers or use it for purposes unrelated to the service.
      </p>

      <h2 className="text-xl font-semibold text-white/70">4. Who we share data with</h2>
      <p className="mt-3 text-white/70">Only service providers that help us run the service, and only as needed:</p>
      <ul>
        <li className="text-white/70">Hosting and application platform (Vercel).</li>
        <li className="text-white/70">Database provider (Supabase).</li>
        <li className="text-white/70">Cloud storage for photos and videos you upload.</li>
        <li className="text-white/70">Email delivery provider.</li>
        <li className="text-white/70">Meta, when we publish your post to your Page at your request.</li>
      </ul>
      <p className="mt-3 text-white/70">We may also disclose data when the law requires it. Data may be processed on servers outside India, including in Australia and the United States.</p>

      <h2 className="text-xl font-semibold text-white/70">5. Security and retention</h2>
      <p className="mt-3 text-white/70">
        We use HTTPS, encrypt stored access tokens and hash passwords. No system is perfectly secure. We keep your data
        while your account is active. When you ask us to delete it, we remove it within 30 days (see our{" "}
        <a href="/data-deletion">data deletion page</a>).
      </p>

      <h2 className="text-xl font-semibold text-white/70">6. Your choices and rights</h2>
      <p className="mt-3 text-white/70">
        You can disconnect any connected account at any time from the dashboard, remove Social Tool from your Facebook
        settings, and ask us to access, correct or delete your data, in line with applicable law (including India&apos;s
        Digital Personal Data Protection Act, 2023). Write to us at the address below.
      </p>

      <h2 className="text-xl font-semibold text-white/70">7. Children</h2>
      <p className="mt-3 text-white/70">Social Tool is for people aged 18 and over. We do not knowingly collect data from children.</p>

      <h2 className="text-xl font-semibold text-white/70">8. Changes</h2>
      <p className="mt-3 text-white/70">We may update this policy. The date at the top shows the latest version. We will give notice of material changes.</p>

      <h2 className="text-xl font-semibold text-white/70">9. Contact</h2>
      <p className="mt-3 text-white/70">
        MVP InfoTech, Maldhari Society, Block no 5, RTO Road, Rajkot, Gujarat 360003, India<br />
        Email: <a href="mailto:mvpinfotechmitesh@gmail.com">mvpinfotechmitesh@gmail.com</a> · Phone: +91 9574927922
      </p>
    </LegalPage>
  );
}
