/**
 * Privacy Policy Screen Component
 * 
 * This component displays the application's privacy policy in a user-friendly format.
 * It includes sections about data collection, camera usage, third-party services,
 * and other important privacy-related information. The screen uses the IOSLayout
 * component for consistent iOS-style UI elements.
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IOSLayout } from '../../components/IOSLayout';

/**
 * PrivacyPolicy Component
 * 
 * @returns {JSX.Element} The rendered Privacy Policy screen
 * 
 * Features:
 * - Displays comprehensive privacy policy information
 * - Provides navigation back to previous screen
 * - Uses consistent iOS-style design elements
 * - Includes sections for various privacy aspects
 * - Contains links to third-party privacy policies
 */
export const PrivacyPolicy = (): JSX.Element => {
  // Hook for programmatic navigation
  const navigate = useNavigate();

  /**
   * Handles navigation back to the previous screen
   * Uses the browser's history API through React Router
   */
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <IOSLayout>
      {/* Main container with fixed width and padding */}
      <div className="w-[343px] mx-auto pt-4 pb-20">
        {/* Header Section */}
        {/* 
          Contains a back button and the screen title
          Uses flex layout for proper alignment
          Maintains consistent spacing and typography
        */}
        <div className="flex items-center mb-6">
          <button 
            onClick={handleBack}
            className="mr-4 text-[#7968ff] text-[15px] font-semibold"
          >
            Back
          </button>
          <h1 className="text-[20px] font-semibold text-[#fbfbff]">
            Privacy Policy
          </h1>
        </div>

        {/* Content Section */}
        {/* 
          Main content area with dark background and rounded corners
          Contains multiple sections of privacy information
          Uses consistent typography and spacing
        */}
        <div className="bg-[#2C3E50] rounded-[12px] p-4 mb-4">
          {/* Last Updated Date */}
          <p className="text-[#fbfbff] text-[15px] mb-4">
            <strong>Last Updated:</strong> June 2023
          </p>

          {/* Introduction Section */}
          <h2 className="text-[18px] font-semibold text-[#fbfbff] mb-2">Introduction</h2>
          <p className="text-[#fbfbff] text-[15px] mb-4">
            VisGuide ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we handle information when you use our application.
          </p>

          {/* Data Collection Section */}
          <h2 className="text-[18px] font-semibold text-[#fbfbff] mb-2">Data Collection</h2>
          <p className="text-[#fbfbff] text-[15px] mb-2">
            <strong>VisGuide does not collect, store, or transmit any personal data.</strong>
          </p>
          <p className="text-[#fbfbff] text-[15px] mb-4">
            Our application operates entirely on your device and does not send any data to external servers except for the following:
          </p>
          <ol className="list-decimal pl-5 text-[#fbfbff] text-[15px] mb-4">
            <li className="mb-2">
              <strong>Object Detection API Calls:</strong> When using the object detection feature, images from your camera are temporarily sent to the Roboflow API for processing. These images are not stored and are immediately discarded after processing.
            </li>
            <li>
              <strong>Voice Synthesis:</strong> The application uses your device's built-in speech synthesis capabilities. No voice data is transmitted to external servers.
            </li>
          </ol>

          {/* Camera Usage Section */}
          <h2 className="text-[18px] font-semibold text-[#fbfbff] mb-2">Camera Usage</h2>
          <p className="text-[#fbfbff] text-[15px] mb-4">
            VisGuide requires access to your device's camera to provide object detection functionality. Camera access is only used when the application is actively running and you have granted permission. Camera data is processed locally on your device and is not stored or transmitted except for the temporary API calls mentioned above.
          </p>

          {/* Third-Party Services Section */}
          <h2 className="text-[18px] font-semibold text-[#fbfbff] mb-2">Third-Party Services</h2>
          <p className="text-[#fbfbff] text-[15px] mb-2">
            VisGuide uses the following third-party services:
          </p>
          <ol className="list-decimal pl-5 text-[#fbfbff] text-[15px] mb-4">
            <li>
              <strong>Roboflow API:</strong> Used for object detection. Please refer to <a href="https://roboflow.com/privacy" className="text-[#7968ff] underline">Roboflow's Privacy Policy</a> for information about how they handle data.
            </li>
          </ol>

          {/* Data Storage Section */}
          <h2 className="text-[18px] font-semibold text-[#fbfbff] mb-2">Data Storage</h2>
          <p className="text-[#fbfbff] text-[15px] mb-2">
            All data generated by the application is stored locally on your device and is not transmitted to any external servers. This includes:
          </p>
          <ul className="list-disc pl-5 text-[#fbfbff] text-[15px] mb-4">
            <li>Application settings</li>
            <li>User preferences</li>
            <li>Detection history</li>
          </ul>

          {/* Children's Privacy Section */}
          <h2 className="text-[18px] font-semibold text-[#fbfbff] mb-2">Children's Privacy</h2>
          <p className="text-[#fbfbff] text-[15px] mb-4">
            VisGuide is not directed at children under 13. We do not knowingly collect any personal information from children under 13.
          </p>

          {/* Policy Updates Section */}
          <h2 className="text-[18px] font-semibold text-[#fbfbff] mb-2">Changes to This Privacy Policy</h2>
          <p className="text-[#fbfbff] text-[15px] mb-4">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
          </p>

          {/* Contact Information Section */}
          <h2 className="text-[18px] font-semibold text-[#fbfbff] mb-2">Contact Us</h2>
          <p className="text-[#fbfbff] text-[15px] mb-2">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <ul className="list-disc pl-5 text-[#fbfbff] text-[15px]">
            <li>GitHub: <a href="abdu" className="text-[#7968ff] underline">https://github.com/aziz-1/VisGuide</a></li>
          </ul>
        </div>
      </div>
    </IOSLayout>
  );
};

export default PrivacyPolicy; 