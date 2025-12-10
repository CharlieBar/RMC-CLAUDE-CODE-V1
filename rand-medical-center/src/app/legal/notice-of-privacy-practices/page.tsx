import { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { SITE_CONFIG } from "@/lib/constants";
import { Shield, ChevronRight, Phone, Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Notice of Privacy Practices (HIPAA) | Rand Medical Center",
  description:
    "HIPAA Notice of Privacy Practices for Rand Medical Center. Learn how we protect and use your health information.",
};

export default function NoticeOfPrivacyPracticesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-white to-teal-50/30">
        <div className="container container-default mx-auto">
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
            <Link href="/" className="hover:text-teal-600">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/legal/privacy-policy" className="hover:text-teal-600">
              Legal
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-slate-700">HIPAA Notice</span>
          </nav>

          <Badge variant="primary" size="lg" className="mb-4">
            <Shield className="h-4 w-4 mr-1" />
            HIPAA Notice
          </Badge>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-slate-900 mb-4">
            Notice of Privacy Practices
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl">
            This notice describes how medical information about you may be used
            and disclosed and how you can get access to this information. Please
            review it carefully.
          </p>
          <p className="text-sm text-slate-500 mt-4">
            Effective Date: January 1, 2024
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="max-w-4xl mx-auto prose prose-slate prose-lg">
            <h2>Our Commitment to Your Privacy</h2>
            <p>
              At Rand Medical Center, we understand that your health information
              is personal and private. We are committed to protecting your health
              information and complying with the Health Insurance Portability and
              Accountability Act (HIPAA) Privacy Rule.
            </p>
            <p>
              This Notice of Privacy Practices describes how we may use and
              disclose your protected health information (PHI) to carry out
              treatment, payment, and health care operations, and for other
              purposes permitted or required by law.
            </p>

            <h2>Your Protected Health Information</h2>
            <p>
              Protected health information (PHI) is information about you,
              including demographic information, that may identify you and relates
              to your past, present, or future physical or mental health condition
              and related health care services.
            </p>

            <h2>How We May Use and Disclose Your Health Information</h2>

            <h3>Treatment</h3>
            <p>
              We will use and disclose your health information to provide you with
              medical treatment or services. For example, we may share your health
              information with physicians, nurses, or other health care personnel
              involved in your care.
            </p>

            <h3>Payment</h3>
            <p>
              We will use and disclose your health information to obtain payment
              for health care services we provide to you. For example, we may send
              your health information to your insurance company to get paid for
              services rendered.
            </p>

            <h3>Health Care Operations</h3>
            <p>
              We may use and disclose your health information for health care
              operations. These uses and disclosures are necessary to run our
              practice and ensure that all patients receive quality care. For
              example, we may use health information to review our treatment and
              services and to evaluate the performance of our staff.
            </p>

            <h3>Other Uses and Disclosures</h3>
            <p>
              We may use or disclose your health information for the following
              purposes:
            </p>
            <ul>
              <li>
                <strong>As Required by Law:</strong> We will disclose health
                information when required to do so by federal, state, or local
                law.
              </li>
              <li>
                <strong>Public Health:</strong> We may disclose health information
                for public health activities, such as reporting disease and vital
                statistics.
              </li>
              <li>
                <strong>Health Oversight Activities:</strong> We may disclose
                health information to health oversight agencies for activities
                authorized by law.
              </li>
              <li>
                <strong>Judicial and Administrative Proceedings:</strong> We may
                disclose health information in response to a court order or
                subpoena.
              </li>
              <li>
                <strong>Law Enforcement:</strong> We may disclose health
                information for law enforcement purposes as required by law.
              </li>
              <li>
                <strong>Workers&apos; Compensation:</strong> We may disclose health
                information as authorized by workers&apos; compensation laws.
              </li>
            </ul>

            <h2>Uses and Disclosures Requiring Your Authorization</h2>
            <p>
              For uses and disclosures not described in this Notice, we will
              request your written authorization before using or disclosing your
              health information. You may revoke any authorization you have given
              us at any time by submitting a written request.
            </p>

            <h2>Your Rights Regarding Your Health Information</h2>

            <h3>Right to Inspect and Copy</h3>
            <p>
              You have the right to inspect and obtain a copy of your health
              information that may be used to make decisions about your care. To
              inspect and copy your health information, submit a written request
              to our Privacy Officer.
            </p>

            <h3>Right to Amend</h3>
            <p>
              If you believe that health information we have about you is
              incorrect or incomplete, you have the right to request that we amend
              your health information. To request an amendment, submit a written
              request to our Privacy Officer.
            </p>

            <h3>Right to an Accounting of Disclosures</h3>
            <p>
              You have the right to request an accounting of disclosures we have
              made of your health information. To request an accounting, submit a
              written request to our Privacy Officer.
            </p>

            <h3>Right to Request Restrictions</h3>
            <p>
              You have the right to request a restriction on the health
              information we use or disclose about you for treatment, payment, or
              health care operations. We are not required to agree to your
              request, but if we do agree, we will honor that agreement.
            </p>

            <h3>Right to Request Confidential Communications</h3>
            <p>
              You have the right to request that we communicate with you about
              health matters in a certain way or at a certain location. For
              example, you may request that we contact you only at work or by
              mail.
            </p>

            <h3>Right to a Paper Copy of This Notice</h3>
            <p>
              You have the right to a paper copy of this Notice at any time. To
              obtain a paper copy, contact our office.
            </p>

            <h2>Changes to This Notice</h2>
            <p>
              We reserve the right to change this Notice at any time. Any changes
              will apply to health information we already have about you, as well
              as any information we receive in the future. The current Notice will
              be posted in our office and on our website.
            </p>

            <h2>Complaints</h2>
            <p>
              If you believe your privacy rights have been violated, you may file
              a complaint with our office or with the Secretary of the Department
              of Health and Human Services. You will not be penalized for filing a
              complaint.
            </p>

            <h2>Contact Information</h2>
            <p>
              For more information about this Notice or to exercise any of your
              rights, please contact:
            </p>
            <div className="not-prose bg-slate-50 rounded-xl p-6 my-6">
              <p className="font-semibold text-slate-900 mb-4">
                Rand Medical Center Privacy Officer
              </p>
              <div className="space-y-2 text-slate-600">
                <p className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-teal-600" />
                  {SITE_CONFIG.address.full}
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-teal-600" />
                  {SITE_CONFIG.phoneDisplay}
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-teal-600" />
                  {SITE_CONFIG.email}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
