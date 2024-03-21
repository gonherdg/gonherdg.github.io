import React, { useEffect, useState } from "react";
import "./SivPrivacyPolicy.css";

const SivPrivacyPolicy = () => {

    
    const emailLink = <a className="Privacy-Policy-a" onClick={() => window.location = 'mailto:gonzalodelgaudio@gmail.com'}>gonzalodelgaudio@gmail.com</a>


    const oldPrivacyPolicy = <div className="PPtext">
<div className="PPHeader1">Privacy Policy</div>{`
This page is used to inform players and website visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our service ("`}<span className="PPbold">Service</span>{`"), the Siv game.

    
`}<div className="PPHeader3">Collection and Use of Information:</div>{`
We do not collect or store personal information from our users, either actively or passively. Our application does not require any form of login, registration, or personal information for its operation. We also do not use cookies or other tracking technologies to collect information about your activity within the application.
    
The application may collect non-identifiable usage information automatically, such as game and performance statistics, but this information is used solely for internal analysis purposes to enhance the user experience and is not shared with third parties.

    
`}<div className="PPHeader3">Permissions and APIs:</div>{`
Our Service does not access sensitive information from the device or request additional permissions beyond those necessary for its basic operation, such as network access to load game resources and storage access to save progress data locally on the device.


`}<div className="PPHeader3">Abuse of Devices and Networks:</div>{`
Our application does not misuse or inappropriately use networks, devices, or personal user data. We do not engage in activities that could compromise the security or privacy of our users' devices or networks.


`}<div className="PPHeader3">Deceptive Behavior and Misleading Information:</div>{`
We are committed to providing our users with a transparent and honest experience. We do not include deceptive elements in our application or provide misleading information about its operation or features.


`}<div className="PPHeader3">Children Under 13:</div>{`
Our Service is designed to be suitable for all ages, including children under 13. We do not knowingly collect personal information from children under 13. If a parent or guardian becomes aware that their child has provided us with personal information without their consent, we encourage them to contact us so that we can remove such information from our records.


`}<div className="PPHeader3">Changes to the Privacy Policy:</div>{`
We reserve the right to update or modify this privacy policy at any time. Any significant changes will take effect immediately after being posted on this page. Users are encouraged to periodically review this privacy policy to stay informed about how we protect the information we collect. Continued use of the application after changes to this policy are deemed acceptance of such changes.


`}<div className="PPHeader3">Contact:</div>{`
If you have any questions about this privacy policy or about the privacy practices of Siv, feel free to contact us at gonzalodelgaudio@gmail.com`}

</div>;


    const termlyPrivacyPolicy =  <div className="Privacy-Policy PPtext">
    <div className="PPHeader1">PRIVACY POLICY</div><br/>

    <div className="PPbold">Last updated March 21, 2024</div><br/>


{`
This privacy notice for Gonzalo Hernán Del Gaudio ("`}<span className="PPbold">we</span>{`," "`}<span className="PPbold">us</span>{`," or "`}<span className="PPbold">our</span>{`"), describes how and why we might collect, store, use, and/or share ("process") your information when you use our services ("Services"), such as when you:
`}<br/><ul><li>{`     - Download and use our mobile application (Siv), or any other application of ours that links to this privacy notice
`}</li><br/><li>{`     - Engage with us in other related ways, including any sales, marketing, or events
`}</li></ul>{`
`}<span className="PPbold">Questions or concerns?</span>{` Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at gonzalodelgaudio@gmail.com.



`}<div className="PPHeader2">SUMMARY OF KEY POINTS</div>{`

`}<span className="PPbold PPit"><em>This summary provides key points from our privacy notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for.</em></span>{`

`}<span className="PPbold">What personal information do we process?</span>{` When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use. Learn more about personal information you disclose to us.

`}<span className="PPbold">Do we process any sensitive personal information?</span>{` We do not process sensitive personal information.

`}<span className="PPbold">Do we receive any information from third parties?</span>{` We do not receive any information from third parties.

`}<span className="PPbold">How do we process your information?</span>{` We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. Learn more about how we process your information.

`}<span className="PPbold">In what situations and with which parties do we share personal information?</span>{` We may share information in specific situations and with specific third parties. Learn more about when and with whom we share your personal information.

`}<span className="PPbold">How do we keep your information safe?</span>{` We have organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Learn more about how we keep your information safe.

`}<span className="PPbold">What are your rights?</span>{` Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. Learn more about your privacy rights.

`}<span className="PPbold">How do you exercise your rights?</span>{` The easiest way to exercise your rights is by visiting https://gonherdg.github.io/siv/personal-information, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.

Want to learn more about what we do with any information we collect? Review the privacy notice in full.



`}<span className="PPHeader2">TABLE OF CONTENTS</span>{`

1. WHAT INFORMATION DO WE COLLECT?
2. HOW DO WE PROCESS YOUR INFORMATION?
3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?
4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
5. WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?
6. HOW LONG DO WE KEEP YOUR INFORMATION?
7. HOW DO WE KEEP YOUR INFORMATION SAFE?
8. WHAT ARE YOUR PRIVACY RIGHTS?
9. CONTROLS FOR DO-NOT-TRACK FEATURES
10. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
11. DO WE MAKE UPDATES TO THIS NOTICE?
12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?


`}<span className="PPHeader2">1. WHAT INFORMATION DO WE COLLECT?</span>{`

`}<span className="PPHeader3">Personal information you disclose to us</span>{`

In Short: We collect personal information that you provide to us.

We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.

Sensitive Information. We do not process sensitive information.

All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.


2. HOW DO WE PROCESS YOUR INFORMATION?

In Short: We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.

We process your personal information for a variety of reasons, depending on how you interact with our Services, including:




To save or protect an individual's vital interest. We may process your information when necessary to save or protect an individual’s vital interest, such as to prevent harm.

3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?

In Short: We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e., legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfill our contractual obligations, to protect your rights, or to fulfill our legitimate business interests.

If you are located in the EU or UK, this section applies to you.

The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely on in order to process your personal information. As such, we may rely on the following legal bases to process your personal information:
Consent. We may process your information if you have given us permission (i.e., consent) to use your personal information for a specific purpose. You can withdraw your consent at any time. Learn more about withdrawing your consent.
Legal Obligations. We may process your information where we believe it is necessary for compliance with our legal obligations, such as to cooperate with a law enforcement body or regulatory agency, exercise or defend our legal rights, or disclose your information as evidence in litigation in which we are involved.
Vital Interests. We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party, such as situations involving potential threats to the safety of any person.
If you are located in Canada, this section applies to you.

We may process your information if you have given us specific permission (i.e., express consent) to use your personal information for a specific purpose, or in situations where your permission can be inferred (i.e., implied consent). You can withdraw your consent at any time.

In some exceptional cases, we may be legally permitted under applicable law to process your information without your consent, including, for example:
If collection is clearly in the interests of an individual and consent cannot be obtained in a timely way
For investigations and fraud detection and prevention
For business transactions provided certain conditions are met
If it is contained in a witness statement and the collection is necessary to assess, process, or settle an insurance claim
For identifying injured, ill, or deceased persons and communicating with next of kin
If we have reasonable grounds to believe an individual has been, is, or may be victim of financial abuse
If it is reasonable to expect collection and use with consent would compromise the availability or the accuracy of the information and the collection is reasonable for purposes related to investigating a breach of an agreement or a contravention of the laws of Canada or a province
If disclosure is required to comply with a subpoena, warrant, court order, or rules of the court relating to the production of records
If it was produced by an individual in the course of their employment, business, or profession and the collection is consistent with the purposes for which the information was produced
If the collection is solely for journalistic, artistic, or literary purposes
If the information is publicly available and is specified by the regulations

4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?

In Short: We may share information in specific situations described in this section and/or with the following third parties.

We may need to share your personal information in the following situations:
Business Transfers. We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.

5. WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?

In Short: We are not responsible for the safety of any information that you share with third parties that we may link to or who advertise on our Services, but are not affiliated with, our Services.

The Services may link to third-party websites, online services, or mobile applications and/or contain advertisements from third parties that are not affiliated with us and which may link to other websites, services, or applications. Accordingly, we do not make any guarantee regarding any such third parties, and we will not be liable for any loss or damage caused by the use of such third-party websites, services, or applications. The inclusion of a link towards a third-party website, service, or application does not imply an endorsement by us. We cannot guarantee the safety and privacy of data you provide to any third parties. Any data collected by third parties is not covered by this privacy notice. We are not responsible for the content or privacy and security practices and policies of any third parties, including other websites, services, or applications that may be linked to or from the Services. You should review the policies of such third parties and contact them directly to respond to your questions.

6. HOW LONG DO WE KEEP YOUR INFORMATION?

In Short: We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.

We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). 

When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.

7. HOW DO WE KEEP YOUR INFORMATION SAFE?

In Short: We aim to protect your personal information through a system of organizational and technical security measures.

We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.

8. WHAT ARE YOUR PRIVACY RIGHTS?

In Short: In some regions, such as the European Economic Area (EEA), United Kingdom (UK), Switzerland, and Canada, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time.

In some regions (like the EEA, UK, Switzerland, and Canada), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; (iv) if applicable, to data portability; and (v) not to be subject to automated decision-making. In certain circumstances, you may also have the right to object to the processing of your personal information. You can make such a request by contacting us by using the contact details provided in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below.

We will consider and act upon any request in accordance with applicable data protection laws.

If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your Member State data protection authority or UK data protection authority.

If you are located in Switzerland, you may contact the Federal Data Protection and Information Commissioner.

Withdrawing your consent: If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below.

However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.

If you have questions or comments about your privacy rights, you may email us at gonzalodelgaudio@gmail.com.

9. CONTROLS FOR DO-NOT-TRACK FEATURES

Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.

10. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?

In Short: If you are a resident of , you are granted specific rights regarding access to your personal information.

What categories of personal information do we collect?

We have collected the following categories of personal information in the past twelve (12) months:

Category	Examples	Collected
A. Identifiers
Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name

NO

B. Protected classification characteristics under state or federal law
Gender and date of birth

NO

C. Commercial information
Transaction information, purchase history, financial details, and payment information

NO

D. Biometric information
Fingerprints and voiceprints

NO

E. Internet or other similar network activity
Browsing history, search history, online behavior, interest data, and interactions with our and other websites, applications, systems, and advertisements

NO

F. Geolocation data
Device location

NO

G. Audio, electronic, visual, thermal, olfactory, or similar information
Images and audio, video or call recordings created in connection with our business activities

NO

H. Professional or employment-related information
Business contact details in order to provide you our Services at a business level or job title, work history, and professional qualifications if you apply for a job with us

NO

I. Education Information
Student records and directory information

NO

J. Inferences drawn from collected personal information
Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual’s preferences and characteristics

NO

K. Sensitive personal Information		

NO


We may also collect other personal information outside of these categories through instances where you interact with us in person, online, or by phone or mail in the context of:
Receiving help through our customer support channels;
Participation in customer surveys or contests; and
Facilitation in the delivery of our Services and to respond to your inquiries.
How do we use and share your personal information?

Learn about how we use your personal information in the section, "HOW DO WE PROCESS YOUR INFORMATION?"

Will your information be shared with anyone else?

We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. Learn more about how we disclose personal information to in the section, "WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?"

We may use your personal information for our own business purposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be "selling" of your personal information.

We have not disclosed, sold, or shared any personal information to third parties for a business or commercial purpose in the preceding twelve (12) months. We will not sell or share personal information in the future belonging to website visitors, users, and other consumers.

11. DO WE MAKE UPDATES TO THIS NOTICE?

In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws.

We may update this privacy notice from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.

12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?

If you have questions or comments about this notice, you may email us at gonzalodelgaudio@gmail.com.

13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?

Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it. To request to review, update, or delete your personal information, please visit: https://gonherdg.github.io/siv/personal-information.
This privacy policy was created using Termly's Privacy Policy Generator.`} 




       <div>



           
       </div>



   </div>



    return (
        <div className="App">
<div className="Privacy-Policy PPtext">
            {oldPrivacyPolicy}
            </div>
        </div>
    );
}

export default SivPrivacyPolicy;