import { X } from "lucide-react";

const ModalTerms = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center p-4 pt-6 z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl h-[90vh] flex flex-col mt-16">
        {/* Fixed Header */}
        <div className="flex justify-center items-center relative p-6 border-b ">
          <h1 className="text-2xl font-semibold">Terms of Use</h1>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full absolute right-6"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto flex-1 px-6 py-4">
          <p className="text-gray-600 mb-4">
            This privacy policy discloses the privacy practices for (website
            address). This privacy policy applies solely to information
            collected by this web site. It will notify you of the following:
          </p>

          <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-600">
            <li>
              What personally identifiable information is collected from you
              through the web site, how it is used and with whom it may be
              shared.
            </li>
            <li>
              What choices are available to you regarding the use of your data.
            </li>
            <li>
              The security procedures in place to protect the misuse of your
              information.
            </li>
            <li>How you can correct any inaccuracies in the information.</li>
          </ul>

          <h2 className="text-xl font-semibold mb-4">
            Information Collection, Use, and Sharing
          </h2>
          <div className="space-y-4 text-gray-600 mb-8">
            <p>
              We are the sole owners of the information collected on this site.
              We only have access to/collect information that you voluntarily
              give us via email or other direct contact from you. We will not
              sell or rent this information to anyone.
            </p>
            <p>
              We will use your information to respond to you, regarding the
              reason you contacted us. We will not share your information with
              any third party outside of our organization, other than as
              necessary to fulfill your request, e.g. to ship an order.
            </p>
            <p>
              Unless you ask us not to, we may contact you via email in the
              future to tell you about specials, new products or services, or
              changes to this privacy policy.
            </p>
          </div>

          <h2 className="text-xl font-semibold mb-4">
            Your Access to and Control Over Information
          </h2>
          <p className="text-gray-600 mb-4">
            You may opt out of any future contacts from us at any time. You can
            do the following at any time by contacting us via the email address
            or phone number given on our website:
          </p>
          <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-600">
            <li>See what data we have about you, if any.</li>
            <li>Change/correct any data we have about you.</li>
            <li>Have us delete any data we have about you.</li>
            <li>Express any concern you have about our use of your data.</li>
          </ul>

          <h2 className="text-xl font-semibold mb-4">Security</h2>
          <div className="space-y-4 text-gray-600 mb-8">
            <p>
              We take precautions to protect your information. When you submit
              sensitive information via the website, your information is
              protected both online and offline.
            </p>
            <p>
              Wherever we collect sensitive information (such as credit card
              data), that information is encrypted and transmitted to us in a
              secure way. You can verify this by looking for a closed lock icon
              at the bottom of your web browser, or looking for "https" at the
              beginning of the address of the web page.
            </p>
            <p>
              While we use encryption to protect sensitive information
              transmitted online, we also protect your information offline. Only
              employees who need the information to perform a specific job (for
              example, billing or customer service) are granted access to
              personally identifiable information. The computers/servers in
              which we store personally identifiable information are kept in a
              secure environment.
            </p>
          </div>

          <h2 className="text-xl font-semibold mb-4">Registration</h2>
          <p className="text-gray-600 mb-8">
            In order to use this website, a user must first complete the
            registration form. During registration a user is required to give
            certain information (such as name and email address). This
            information is used to contact you about the products/services on
            our site in which you have expressed interest. At your option, you
            may also provide demographic information (such as gender or age)
            about yourself, but it is not required.
          </p>

          <h2 className="text-xl font-semibold mb-4">Orders</h2>
          <p className="text-gray-600 mb-8">
            We request information from you on our order form. To buy from us,
            you must provide contact information (like name and shipping
            address) and financial information (like credit card number,
            expiration date). This information is used for billing purposes and
            to fill your orders. If we have trouble processing an order, we'll
            use this information to contact you.
          </p>

          <h2 className="text-xl font-semibold mb-4">Cookies</h2>
          <p className="text-gray-600 mb-8">
            We use "cookies" on this site. A cookie is a piece of data stored on
            a site visitor's hard drive to help us improve your access to our
            site and identify repeat visitors to our site. For instance, when we
            use a cookie to identify you, you would not have to log in a
            password more than once, thereby saving time while on our site.
            Cookies can also enable us to track and target the interests of our
            users to enhance the experience on our site. Usage of a cookie is in
            no way linked to any personally identifiable information on our
            site.
          </p>

          <h2 className="text-xl font-semibold mb-4">Updates</h2>
          <p className="text-gray-600">
            Our Privacy Policy may change from time to time and all updates will
            be posted on this page. If you feel that we are not abiding by this
            privacy policy, you should contact us immediately via telephone at
            +1856-236-1853 or via email Contact@webi.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModalTerms;
