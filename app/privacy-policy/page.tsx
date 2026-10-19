import type { Metadata } from "next";
import LegalPage from "../../components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | MVP InfoTech",
  description: "How MVP InfoTech collects, uses and protects data in Social Tool and on this website.",
};

export default function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy" updated="October 19, 2026">
      <p>
        This policy explains how MVP InfoTech (&quot;we&quot;, &quot;us&quot;) handles personal data on this website and in
        Social Tool, our web application for writing and scheduling social media posts. We are a sole proprietorship
        based at Maldhari Society, Block no 5, RTO Road, Rajkot, Gujarat 360003, India.
      </p>

      <h2>1. Information we collect</h2>
      <ul>
        <li><strong>Account data:</strong> your name, email address and a password (stored only as a one-way hash). If you sign in with Google we receive your name and verified email.</li>
        <li><strong>Connected account data:</strong> when you connect Facebook, we receive the list of Pages you choose to share, each Page name and ID, and an access token for each Page. When you connect Instagram, we receive your account ID and username and an access token. Tokens are stored encrypted.</li>
        <li><strong>Content you create:</strong> post text, photos or videos you upload, and the times you schedule.</li>
        <li><strong>Technical data:</strong> a login session cookie and basic server logs (such as IP address and browser type) created by our hosting providers.</li>
        <li><strong>Messages:</strong> emails you send us, and the system emails we send you (verification and password reset).</li>
      </ul>

      <h2>2. How we use it</h2>
      <ul>
        <li>To run Social Tool: sign you in, show your Pages, and publish the posts you schedule at the time you choose.</li>
        <li>To keep the service secure, prevent abuse and fix problems.</li>
        <li>To answer your questions and meet legal obligations.</li>
      </ul>
      <p>We do not sell your data, we do not use it for advertising, and we do not build advertising profiles.</p>

      <h2>3. Data from Meta (Facebook and Instagram)</h2>
      <p>
        We ask Facebook for these permissions only: <em>pages_show_list</em> (to list your Pages),{" "}
        <em>pages_manage_posts</em> (to publish the posts you write), <em>pages_read_engagement</em> (needed together with
        publishing) and <em>business_management</em> (to find Pages owned by a business portfolio). For Instagram we ask for <em>instagram_business_basic</em> (to read your account ID and username) and <em>instagram_business_content_publish</em> (to publish the photos and videos you schedule). We use this data
        only to provide those features to you. We follow the Meta Platform Terms and do not transfer this data to data
        brokers or use it for purposes unrelated to the service.
      </p>

      <h2>4. Who we share data with</h2>
      <p>Only service providers that help us run the service, and only as needed:</p>
      <ul>
        <li>Hosting and application platform (Vercel).</li>
        <li>Database provider (Supabase).</li>
        <li>Cloud storage for photos and videos you upload.</li>
        <li>Email delivery provider.</li>
        <li>Meta, when we publish your post to your Page or Instagram account at your request.</li>
      </ul>
      <p>We may also disclose data when the law requires it. Data may be processed on servers outside India, including in Australia and the United States.</p>

      <h2>5. Security and retention</h2>
      <p>
        We use HTTPS, encrypt stored access tokens and hash passwords. No system is perfectly secure. We keep your data
        while your account is active. When you ask us to delete it, we remove it within 30 days (see our{" "}
        <a href="/data-deletion">data deletion page</a>).
      </p>

      <h2>6. Your choices and rights</h2>
      <p>
        You can disconnect any connected account at any time from the dashboard, remove Social Tool from your Facebook
        settings, and ask us to access, correct or delete your data, in line with applicable law (including India&apos;s
        Digital Personal Data Protection Act, 2023). Write to us at the address below.
      </p>

      <h2>7. Children</h2>
      <p>Social Tool is for people aged 18 and over. We do not knowingly collect data from children.</p>

      <h2>8. Changes</h2>
      <p>We may update this policy. The date at the top shows the latest version. We will give notice of material changes.</p>

      <h2>9. Contact</h2>
      <p>
        MVP InfoTech, Maldhari Society, Block no 5, RTO Road, Rajkot, Gujarat 360003, India<br />
        Email: <a href="mailto:mvpinfotechmitesh@gmail.com">mvpinfotechmitesh@gmail.com</a> · Phone: +91 9574927922
      </p>
    </LegalPage>
  );
}
