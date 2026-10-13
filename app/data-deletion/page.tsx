import type { Metadata } from "next";
import LegalPage from "../../components/LegalPage";

export const metadata: Metadata = {
  title: "Data Deletion Instructions | MVP InfoTech",
  description: "How to remove your data from Social Tool.",
};

export default function DataDeletion() {
  return (
    <LegalPage title="Data Deletion Instructions" updated="October 13, 2026">
      <p className="text-white/70">You can remove your data from Social Tool in any of these ways.</p>

      <h2>Option 1: Disconnect an account</h2>
      <ol>
        <li className="text-white/70">Sign in to Social Tool and open the Dashboard.</li>
        <li className="text-white/70">Under &quot;Connected accounts&quot;, press <strong>Disconnect</strong> on Facebook.</li>
      </ol>
      <p className="text-white/70">This deletes the saved access token and Page details for that account.</p>

      <h2>Option 2: Delete your whole account</h2>
      <p className="text-white/70">
        Email <a href="mailto:mvpinfotechmitesh@gmail.com?subject=Delete%20my%20Social%20Tool%20data">mvpinfotechmitesh@gmail.com</a>{" "}
        from the email address you registered with, with the subject &quot;Delete my Social Tool data&quot;. We will
        delete your account, connected accounts, posts and uploaded files within 30 days and confirm by email.
      </p>

      <h2>Option 3: Remove the app from Facebook</h2>
      <ol>
        <li className="text-white/70">On Facebook open Settings, then <strong>Business integrations</strong> (or Apps and Websites).</li>
        <li className="text-white/70">Find Social Tool and press <strong>Remove</strong>.</li>
        <li className="text-white/70">To also erase the data we store, email us as in Option 2.</li>
      </ol>

      <h2>What we delete</h2>
      <p className="text-white/70">Account details, connected account tokens, scheduled and published post records, and uploaded photos and videos. We may keep limited records where the law requires.</p>

      <p className="text-white/70">Questions? Contact <a href="mailto:mvpinfotechmitesh@gmail.com">mvpinfotechmitesh@gmail.com</a>.</p>
    </LegalPage>
  );
}
