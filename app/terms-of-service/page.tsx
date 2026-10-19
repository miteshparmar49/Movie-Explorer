import type { Metadata } from "next";
import LegalPage from "../../components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service | MVP InfoTech",
  description: "The terms for using Social Tool by MVP InfoTech.",
};

export default function Terms() {
  return (
    <LegalPage title="Terms of Service" updated="October 13, 2026">
      <p>
        These terms apply when you use Social Tool, provided by MVP InfoTech, Rajkot, Gujarat, India (&quot;we&quot;,
        &quot;us&quot;). By creating an account you agree to them.
      </p>

      <h2>1. The service</h2>
      <p>
        Social Tool lets you write posts, attach a photo or video, and schedule them for publishing on social media
        accounts you connect. Some platforms may be marked &quot;coming soon&quot; and are not yet available.
      </p>

      <h2>2. Eligibility and accounts</h2>
      <ul>
        <li>You must be 18 or older and able to enter a contract.</li>
        <li>You must have the right to manage every Page or account you connect.</li>
        <li>Keep your password secret. You are responsible for activity under your account.</li>
      </ul>

      <h2>3. Connected platforms</h2>
      <p>
        When you connect a platform such as Facebook, you must also follow that platform&apos;s own terms and policies.
        Platforms can change or limit their features at any time, and we are not responsible for their decisions.
      </p>

      <h2>4. Your content</h2>
      <p>
        You own your content. You give us permission to store it and send it to the platforms you choose, only to
        provide the service. You promise that your content is lawful and does not infringe anyone&apos;s rights.
      </p>

      <h2>5. Acceptable use</h2>
      <p>Do not use Social Tool to send spam, post illegal, hateful or misleading content, break platform rules, or attempt to access other users&apos; data or disrupt the service.</p>

      <h2>6. Plans and payment</h2>
      <p>
        Social Tool is currently free during our launch period. We may introduce paid plans later. We will tell you the
        price before you are charged, and existing free features will not become paid without notice.
      </p>

      <h2>7. Availability</h2>
      <p>
        We work to publish posts at the scheduled time but do not guarantee exact timing or uninterrupted service.
        Outages of third-party platforms can delay or block publishing.
      </p>

      <h2>8. Disclaimer and liability</h2>
      <p>
        The service is provided &quot;as is&quot;. To the extent allowed by law, we are not liable for indirect or
        consequential loss, and our total liability is limited to the amount you paid us in the 3 months before the
        claim.
      </p>

      <h2>9. Ending your account</h2>
      <p>You may stop using the service and request deletion at any time. We may suspend accounts that break these terms.</p>

      <h2>10. Governing law</h2>
      <p>These terms are governed by the laws of India. Courts at Rajkot, Gujarat have jurisdiction.</p>

      <h2>11. Contact</h2>
      <p>
        MVP InfoTech, Maldhari Society, Block no 5, RTO Road, Rajkot, Gujarat 360003, India<br />
        Email: <a href="mailto:mvpinfotechmitesh@gmail.com">mvpinfotechmitesh@gmail.com</a>
      </p>
    </LegalPage>
  );
}
