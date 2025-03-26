import { Typography } from "antd";
import styled from "styled-components";
import { AppLayout } from "../../AppLayout";
import { COLORS } from "../colors";

const { Title, Paragraph } = Typography;

const TermsOfUseContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  color: ${COLORS.white};
  * {
    font-family: sans-serif;
  }
`;

const TermsTitle = styled(Title)`
  color: ${COLORS.white} !important;
  text-align: center;
  margin-bottom: 40px !important;
`;

const TermsSection = styled.div`
  margin-bottom: 30px;
`;

const SectionTitle = styled(Title)`
  color: ${COLORS.yellow} !important;
  font-size: 20px !important;
`;

export const TermsOfUsePage = () => {
  return (
    <AppLayout>
      <TermsOfUseContainer>
        <TermsTitle level={1}>
          Terms of Use for Munki Analytics Platform
        </TermsTitle>
        <Paragraph style={{ textAlign: "center", marginBottom: "40px" }}>
          Effective Date: March 19, 2025
        </Paragraph>

        <Paragraph>
          Welcome to the Munki Analytics Platform ("Munki Analytics,"
          "Platform"), provided by Mun Labs ("we," "us," or "our"). These Terms
          of Use ("Terms") govern your access to and use of Munki Analytics,
          including our website, services, tools, and any content provided
          therein (collectively, the "Platform"). By accessing or using the
          Platform, you agree to be bound by these Terms. If you do not agree,
          please do not use the Platform.
        </Paragraph>

        <TermsSection>
          <SectionTitle level={3}>1. Overview of the Platform</SectionTitle>
          <Paragraph>
            Munki Analytics is a Web3-focused platform designed to provide users
            with data analytics, insights, and tools related to blockchain
            networks, decentralized applications (dApps), smart contracts, and
            digital assets. The Platform leverages both on-chain data (e.g.,
            transaction records, smart contract interactions, and blockchain
            metrics) and social data from various sources, including but not
            limited to X and other social media platforms, to deliver
            comprehensive insights into the Web3 ecosystem. The Platform may
            integrate with decentralized protocols and third-party services. We
            do not control or operate the underlying blockchain networks or
            third-party services.
          </Paragraph>
        </TermsSection>

        <TermsSection>
          <SectionTitle level={3}>2. Eligibility</SectionTitle>
          <Paragraph>
            You must be at least 18 years old and have the legal capacity to
            enter into these Terms to use the Platform. By using the Platform,
            you represent and warrant that you meet these requirements and that
            your use complies with all applicable laws and regulations in your
            jurisdiction.
          </Paragraph>
        </TermsSection>

        <TermsSection>
          <SectionTitle level={3}>3. User Accounts</SectionTitle>
          <Paragraph>
            <strong>Account Creation:</strong> To access certain features, you
            may need to create an account using a valid email address. You are
            responsible for maintaining the security of your account
            credentials, including your password.
          </Paragraph>
          <Paragraph>
            <strong>Account Responsibility:</strong> We do not have access to
            your account password. You are solely responsible for keeping your
            login information secure and for any activity that occurs under your
            account.
          </Paragraph>
          <Paragraph>
            <strong>Accuracy:</strong> You agree to provide accurate information
            when registering or using the Platform.
          </Paragraph>
        </TermsSection>

        <TermsSection>
          <SectionTitle level={3}>4. Permitted Use</SectionTitle>
          <Paragraph>
            You may use the Platform for lawful purposes only, including:
          </Paragraph>
          <ul>
            <li>Accessing analytics and insights about Web3 ecosystems.</li>
            <li>Interacting with supported blockchain data and tools.</li>
          </ul>
          <Paragraph>You agree not to:</Paragraph>
          <ul>
            <li>
              Use the Platform to engage in illegal activities, including money
              laundering, fraud, or unauthorized access to systems.
            </li>
            <li>
              Attempt to reverse-engineer, hack, or interfere with the
              Platform's functionality.
            </li>
            <li>
              Use bots, scrapers, or automated tools to extract data without
              prior written consent from us.
            </li>
            <li>
              Violate the intellectual property rights of Mun Labs or third
              parties.
            </li>
          </ul>
        </TermsSection>

        <TermsSection>
          <SectionTitle level={3}>
            5. Blockchain Data and Third-Party Services
          </SectionTitle>
          <Paragraph>
            <strong>Data Accuracy:</strong> The Platform relies on data from
            public blockchains and third-party sources, including social data
            from platforms like X. We do not guarantee the accuracy,
            completeness, or timeliness of this data, as it is subject to the
            nature of decentralized networks and external platforms.
          </Paragraph>
          <Paragraph>
            <strong>Third-Party Links:</strong> The Platform may link to or
            integrate with third-party services, dApps, or protocols. We are not
            responsible for their availability, security, or content.
          </Paragraph>
        </TermsSection>

        <TermsSection>
          <SectionTitle level={3}>6. Intellectual Property</SectionTitle>
          <Paragraph>
            <strong>Ownership:</strong> All content, code, designs, and
            trademarks on the Platform are owned by Mun Labs or our licensors
            and are protected by intellectual property laws.
          </Paragraph>
          <Paragraph>
            <strong>License:</strong> We grant you a limited, non-exclusive,
            non-transferable, revocable license to use the Platform for personal
            or commercial analytics purposes, subject to these Terms.
          </Paragraph>
          <Paragraph>
            <strong>User Content:</strong> If you upload or submit content
            (e.g., feedback, analytics configurations), you grant us a
            worldwide, royalty-free license to use, modify, and display it to
            operate and improve the Platform.
          </Paragraph>
        </TermsSection>

        <TermsSection>
          <SectionTitle level={3}>7. Fees and Payments</SectionTitle>
          <Paragraph>
            <strong>Subscription Fees:</strong> Certain features may require
            payment. Details will be provided at the time of purchase, and all
            fees are non-refundable unless otherwise stated.
          </Paragraph>
          <Paragraph>
            <strong>Gas Fees:</strong> Interactions with blockchains may incur
            gas fees or transaction costs if applicable, which are determined by
            the network and not controlled by Mun Labs. You are solely
            responsible for these costs.
          </Paragraph>
        </TermsSection>

        <TermsSection>
          <SectionTitle level={3}>8. Privacy</SectionTitle>
          <Paragraph>
            Your use of the Platform is subject to our Privacy Policy, which
            explains how we collect, use, and protect your data. By using the
            Platform, you consent to such practices.
          </Paragraph>
        </TermsSection>

        <TermsSection>
          <SectionTitle level={3}>9. No Financial Advice</SectionTitle>
          <Paragraph>
            Mun Labs, through Munki Analytics, is solely a data provider and
            does not offer financial, investment, or trading advice. The
            information, analytics, and insights provided on the Platform are
            for informational purposes only and should not be construed as
            recommendations to buy, sell, or hold any digital assets or to
            engage in any financial transactions. You are solely responsible for
            any decisions or actions taken based on the data provided, and we
            strongly recommend consulting with a qualified financial advisor
            before making any investment decisions.
          </Paragraph>
        </TermsSection>

        <TermsSection>
          <SectionTitle level={3}>10. Disclaimers</SectionTitle>
          <Paragraph>
            <strong>As-Is Basis:</strong> The Platform is provided "as is" and
            "as available" without warranties of any kind, express or implied,
            including fitness for a particular purpose or non-infringement.
          </Paragraph>
          <Paragraph>
            <strong>Web3 Risks:</strong> You acknowledge the inherent risks of
            Web3 technologies, including smart contract vulnerabilities, network
            outages, and loss of funds due to user error or third-party actions.
            We are not liable for such risks.
          </Paragraph>
        </TermsSection>

        <TermsSection>
          <SectionTitle level={3}>11. Limitation of Liability</SectionTitle>
          <Paragraph>
            To the maximum extent permitted by law, Mun Labs, its affiliates,
            and its team shall not be liable for any indirect, incidental,
            consequential, or punitive damages arising from your use of the
            Platform, including loss of data, digital assets, or profits. Our
            total liability shall not exceed the amount you paid us in the
            preceding 12 months, if any.
          </Paragraph>
        </TermsSection>

        <TermsSection>
          <SectionTitle level={3}>12. Indemnification</SectionTitle>
          <Paragraph>
            You agree to indemnify and hold Mun Labs harmless from any claims,
            losses, or damages (including legal fees) arising from your use of
            the Platform, violation of these Terms, or infringement of
            third-party rights.
          </Paragraph>
        </TermsSection>

        <TermsSection>
          <SectionTitle level={3}>13. Termination</SectionTitle>
          <Paragraph>
            We may suspend or terminate your access to the Platform at our
            discretion, with or without notice, for any reason, including
            violation of these Terms.
          </Paragraph>
          <Paragraph>
            You may stop using the Platform at any time by closing your account.
          </Paragraph>
        </TermsSection>

        <TermsSection>
          <SectionTitle level={3}>14. Changes to Terms</SectionTitle>
          <Paragraph>
            We may update these Terms from time to time. The updated version
            will be posted on the Platform with a revised "Effective Date."
            Continued use after changes constitutes your acceptance of the new
            Terms.
          </Paragraph>
        </TermsSection>

        <TermsSection>
          <SectionTitle level={3}>
            15. Governing Law and Dispute Resolution
          </SectionTitle>
          <Paragraph>
            <strong>Governing Law:</strong> These Terms are governed by the laws
            of Singapore.
          </Paragraph>
          <Paragraph>
            <strong>Arbitration:</strong> Any disputes arising from these Terms
            shall be resolved through binding arbitration in Singapore, except
            for injunctive relief, which may be sought in a court of competent
            jurisdiction.
          </Paragraph>
        </TermsSection>

        <TermsSection>
          <SectionTitle level={3}>16. Contact Us</SectionTitle>
          <Paragraph>
            If you have questions about these Terms, please contact us at{" "}
            <a href="mailto:boss@munki.com" style={{ color: COLORS.yellow }}>
              boss@munki.com
            </a>
            .
          </Paragraph>
        </TermsSection>
      </TermsOfUseContainer>
    </AppLayout>
  );
};
