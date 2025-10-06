# Legal Documentation Setup - Complete ✓

## What Has Been Done

### 1. Legal Documents Created and Customized ✓
- **Privacy Policy** (`PRIVACY_POLICY.md`)
  - Customized for Australia, Sydney jurisdiction
  - Azure cloud hosting in Australia
  - OpenAI as AI provider
  - Contact email: info@reportr.ai
  - Fully Google API Services compliant (Limited Use requirements)

- **Terms of Service** (`TERMS_OF_SERVICE.md`)
  - Governed by New South Wales, Australia law
  - Contact email: info@reportr.ai
  - Professional liability disclaimers for financial services
  - AI-generated content acknowledgments

### 2. Website Pages Created ✓
- **Privacy Policy Page**: `/privacy-policy`
  - Full markdown rendering with proper styling
  - Navigation and footer included
  - SEO metadata configured

- **Terms of Service Page**: `/terms`
  - Full markdown rendering with proper styling
  - Navigation and footer included
  - SEO metadata configured

### 3. Website Updates ✓
- **Footer Component**: Updated with correct links
  - Privacy Policy: `/privacy-policy`
  - Terms of Service: `/terms`
  - Removed broken "Acceptable Use" link

- **Homepage**: Footer now appears on main page

### 4. Dependencies ✓
- Installed `react-markdown` for rendering legal documents

---

## What You Need to Do

### 1. Complete Business Address
Both documents currently show:
```
Address: Sydney, NSW, Australia
Note: For a complete mailing address, please contact us at info@reportr.ai
```

**ACTION REQUIRED:**
- Replace with your full registered business address in:
  - `PRIVACY_POLICY.md` (Section 13: Contact Us)
  - `TERMS_OF_SERVICE.md` (Section 17: Contact Information)

### 2. Review Legal Documents with a Lawyer
**IMPORTANT:** These are template documents. Before publishing:
- Have them reviewed by an Australian lawyer
- Ensure compliance with all applicable Australian regulations
- Verify they meet your specific business needs
- Confirm all AI provider data retention policies are accurate

### 3. Google OAuth Setup
To enable Google Single Sign-On, you must:

#### Step 1: Configure OAuth Consent Screen
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create or select your project
3. Navigate to "APIs & Services" > "OAuth consent screen"
4. Fill in required information:
   - App name: Reportr
   - User support email: info@reportr.ai
   - **Privacy Policy URL**: `https://www.reportr.ai/privacy-policy`
   - **Terms of Service URL**: `https://www.reportr.ai/terms`
   - Authorized domains: `reportr.ai`
   - Developer contact: info@reportr.ai

#### Step 2: Configure OAuth Scopes
Only request scopes you actually need:
- `email` - User's email address
- `profile` - Basic profile information
- `openid` - OpenID Connect
- Google Calendar scopes (only if using calendar features)
- Google Drive scopes (only if accessing Drive)

#### Step 3: Submit for Verification (if needed)
If requesting sensitive scopes, Google requires verification:
- Ensure Privacy Policy and Terms are publicly accessible
- Complete Google's security assessment questionnaire
- Provide demonstration video if required

### 4. Domain Verification
Verify ownership of `reportr.ai`:

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: `reportr.ai`
3. Verify ownership using one of:
   - HTML file upload
   - HTML meta tag
   - DNS TXT record (recommended)
   - Google Analytics
   - Google Tag Manager

4. Also verify in [Google Cloud Console](https://console.cloud.google.com/):
   - Navigate to "APIs & Services" > "Credentials"
   - Click "Domain verification"
   - Add `reportr.ai` and verify

### 5. Ensure Public Accessibility
Before submitting for OAuth review:

✓ Privacy Policy must be accessible at: `https://www.reportr.ai/privacy-policy`
✓ Terms of Service must be accessible at: `https://www.reportr.ai/terms`
✓ Both pages must load without login/authentication
✓ Both pages must be indexed (no `noindex` robots meta tag)
✓ Links must match exactly in OAuth consent screen

### 6. Deploy and Test
1. **Deploy to production**:
   ```bash
   cd marketing-website
   npm run build
   # Deploy using your preferred method (Vercel, Azure, etc.)
   ```

2. **Test all links**:
   - Visit `https://www.reportr.ai/privacy-policy`
   - Visit `https://www.reportr.ai/terms`
   - Verify footer links work on all pages
   - Check mobile responsiveness

3. **Test Google OAuth flow**:
   - Ensure Privacy Policy and Terms links appear in OAuth consent
   - Verify users can click and read documents during sign-in

### 7. Microsoft OAuth (if applicable)
If using Microsoft SSO:
1. Register app in [Azure AD](https://portal.azure.com/)
2. Configure redirect URIs
3. Add Privacy Policy and Terms URLs in app registration
4. Request only necessary Microsoft Graph API scopes

---

## File Locations

```
marketing-website/
├── PRIVACY_POLICY.md                    # Privacy Policy source
├── TERMS_OF_SERVICE.md                  # Terms of Service source
├── app/
│   ├── privacy-policy/
│   │   └── page.tsx                     # Privacy Policy page
│   ├── terms/
│   │   └── page.tsx                     # Terms of Service page
│   └── page.tsx                         # Homepage (now with footer)
└── components/
    └── site-footer.tsx                  # Footer component (updated)
```

---

## Important Notes for Google OAuth Compliance

### Your Privacy Policy Includes:
✓ Clear description of data collection, use, storage, and sharing
✓ Google API Services Limited Use disclosure (Section 6)
✓ Detailed third-party service provider information
✓ User rights and control mechanisms
✓ Consent and notification procedures
✓ OpenAI data retention policies
✓ Azure Australia data hosting information

### Your Terms of Service Includes:
✓ Google API Services user data policy compliance (Section 9.4)
✓ Third-party service integrations
✓ AI-generated content disclaimers
✓ Professional liability limitations
✓ User obligations and acceptable use policy

---

## Ongoing Compliance

### When to Update Documents:

1. **New data collection**: Update Privacy Policy before collecting new data types
2. **New AI providers**: Update both documents if changing/adding AI services
3. **New integrations**: Update Privacy Policy when adding third-party services
4. **New features**: Update if features change data handling practices
5. **Legal changes**: Update when Australian privacy laws change

### Update Process:
1. Edit markdown files (`PRIVACY_POLICY.md`, `TERMS_OF_SERVICE.md`)
2. Update "Last Updated" date
3. Notify users via email (material changes require explicit consent)
4. Deploy updated website
5. If material changes affect Google scopes, resubmit OAuth app for review

---

## Support and Questions

If you need to make changes or have questions:
- Legal documents are in markdown format for easy editing
- Pages will automatically reflect changes to markdown files
- Test locally with `npm run dev` before deploying
- Ensure you notify users of any material changes per Section 12 of Privacy Policy

---

## Next Immediate Actions:

1. ☐ Add complete business address to both documents
2. ☐ Review documents with Australian lawyer
3. ☐ Deploy website to production
4. ☐ Verify Privacy Policy accessible at https://www.reportr.ai/privacy-policy
5. ☐ Verify Terms accessible at https://www.reportr.ai/terms
6. ☐ Set up Google OAuth consent screen with correct URLs
7. ☐ Verify reportr.ai domain in Google Cloud Console
8. ☐ Test Google SSO flow with legal documents visible

---

**Your marketing website is now ready with professional, Google-compliant legal documentation!**
