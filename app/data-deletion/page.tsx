import type { Metadata } from "next";
import LegalPage from "../../components/LegalPage";

export const metadata: Metadata = {
  title: "Data Deletion Instructions | MVP InfoTech",
  description: "How to remove your data from Social Tool.",
};

export default function DataDeletion() {
  return (
    <LegalPage title="Data Deletion Instructions" updated="October 19, 2026">
      <p className="text-white">You can remove your data from Social Tool in any of these ways.</p>

      <h2>Option 1: Disconnect an account</h2>
      <ol>
        <li className="text-white">Sign in to Social Tool and open the Dashboard.</li>
        <li className="text-white">Under &quot;Connected accounts&quot;, press <strong>Disconnect</strong> on Facebook or Instagram.</li>
      </ol>
      <p className="text-white">This deletes the saved access token and Page details for that account.</p>

      <h2>Option 2: Delete your whole account</h2>
      <p className="text-white">
        Email <a href="mailto:support@mvpinfotech.in?subject=Delete%20my%20Social%20Tool%20data">support@mvpinfotech.in</a>{" "}
        from the email address you registered with, with the subject &quot;Delete my Social Tool data&quot;. We will
        delete your account, connected accounts, posts and uploaded files within 30 days and confirm by email.
      </p>

      <h2>Option 3: Remove the app from Facebook</h2>
      <ol>
        <li className="text-white">On Facebook open Settings, then <strong>Business integrations</strong> (or Apps and Websites).</li>
        <li className="text-white">Find Social Tool and press <strong>Remove</strong>.</li>
        <li className="text-white">To also erase the data we store, email us as in Option 2.</li>
      </ol>

      <h2>What we delete</h2>
      <p className="text-white">Account details, connected account tokens, scheduled and published post records, and uploaded photos and videos. We may keep limited records where the law requires.</p>

      <p className="text-white">Questions? Contact <a href="mailto:support@mvpinfotech.in">support@mvpinfotech.in</a>.</p>
    </LegalPage>
  );
}
