import type { Metadata } from "next";
import LegalPage from "../../components/LegalPage";

// Change this to the address where the app runs.
const APP_URL = "https://social-midia-tool.vercel.app";

export const metadata: Metadata = {
  title: "Social Tool: Schedule Facebook Posts | MVP InfoTech",
  description: "Social Tool by MVP InfoTech helps small businesses write posts and schedule them on their Facebook Page.",
};

export default function SocialTool() {
  return (
    <LegalPage title="Social Tool by MVP InfoTech" updated="October 19, 2026">
      <p className="text-white">
        Social Tool is a web application from MVP InfoTech that helps small businesses plan their social media. Write a
        post once, add a photo or video, pick the time, and Social Tool publishes it to your Facebook Page for you.
      </p>

      <h2>What you can do today</h2>
      <ul>
        <li className="text-white">Create an account and sign in with email or Google.</li>
        <li className="text-white">Connect your Facebook Page and your Instagram professional account.</li>
        <li className="text-white">Write posts with an optional photo or video.</li>
        <li className="text-white">Schedule a post for a future date and time, move it on a calendar, and see its status on the dashboard.</li>
      </ul>

      <h2>Coming soon</h2>
      <p className="text-white">LinkedIn, YouTube and WhatsApp publishing, AI caption help, and team features.</p>

      <h2>How it works</h2>
      <ol>
        <li className="text-white">Sign up and verify your email.</li>
        <li className="text-white">Press Connect on Facebook and tick the Page you want to use.</li>
        <li className="text-white">Write your post and choose when it should go live.</li>
        <li className="text-white">Social Tool posts it to your Page at that time.</li>
      </ol>

      <h2>Your data</h2>
      <p className="text-white">
        We use the permissions you approve only to list your Pages and publish your posts. Read our{" "}
        <a href="/privacy-policy">Privacy Policy</a>, <a href="/terms-of-service">Terms of Service</a> and{" "}
        <a href="/data-deletion">Data Deletion Instructions</a>.
      </p>

      <h2>Pricing</h2>
      <p className="text-white">Free during our launch period. Paid plans may be added later with advance notice.</p>

      <p className="text-white">
        <a href={APP_URL}>Open Social Tool</a>
      </p>
      <p className="text-white">
        Provided by MVP InfoTech, Maldhari Society, Block no 5, RTO Road, Rajkot, Gujarat 360003, India.{" "}
        <a href="mailto:support@mvpinfotech.in">support@mvpinfotech.in</a>
      </p>
    </LegalPage>
  );
}
