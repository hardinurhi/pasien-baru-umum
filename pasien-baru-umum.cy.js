describe('template spec', () => {
  // it('passes', () => {
  //   cy.visit('https://example.cypress.io')
  // })

  /* ==== Test Created with Cypress Studio ==== */
  it('pasienbaru', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://dev.morclinic.id/login');
    cy.get('#username').type('Ro01');
    cy.get('#password').type('12345678');
    cy.get('button[type=submit]').contains('Sign In').click();
    cy.get('li a span[data-original-title="Pendaftaran Pasien"]').click();
    cy.contains('Daftar Pasien').click();
    cy.get('input[type=radio][value=pasien_baru]').check();
    cy.get('input#no_telp').type('089506549544');
    cy.get('input#nama_pasien').type('Hardi');
    cy.get('input#nama_pasien_tengah').type('Nur');
    cy.get('input#nama_pasien_belakang').type('Hidayat');
    cy.get('input#nik').type('1234567890235421');
    cy.get('input#tempat_lahir').type('Yogyakarta');
    cy.get('input#tanggal_lahir').type('01/01/1992');
    cy.get('textarea#alamat').type('patuk, Gunungkidul', {force:true});
    cy.get('select#provinsi').select('DI Yogyakarta', {force:true}).focus();
    cy.get('select#kabupaten').select('Gunung Kidul', {force:true}).focus();
    cy.get('select#kecamatan').select('Patuk', {force:true}).focus();
    cy.get('select#kelurahan').select('Ngoro Oro', {force:true}).focus();
    cy.get('select#gol_darah').select('A', {force:true}).focus();
    cy.get('select#agama').select('Islam', {force:true}).focus();
    cy.get('select#jenis_kelamin').select('Laki-laki', {force:true}).focus();
    // cy.get('select#id_suku').get('option[data-select2-id=26]').click();
    cy.get('select#status_perkawinan').select('Kawin', {force:true}).focus();
    cy.get('select#id_pekerjaan').select('PNS', {force:true}).focus();
    cy.get('select#id_pendidikan').select('S1', {force:true}).focus();
    cy.get('input[type=radio][value=bayar_sendiri]').check();
    cy.get('input[type=radio]#radio_rencana_pembayaran1').check();
    cy.get('input[type=checkbox]#status_penanggungjawab').check();
    cy.get('select#layanan').select('Pemeriksaan Umum', {force:true}).focus();
    cy.get('select#unit_umum').select('POLI UMUM', {force:true}).focus();
    // cy.get('select#id_jadwal_klinik').select(1, {force:true}).focus();
    cy.get('select#id_jadwal_klinik').select('Dr. dr. Bambang Satoto,Sp.Rad (K).M.Kes - Jumat(05:00:00 - 08:00:00) - POLI UMUM - 50', {force:true}).focus();
    cy.get('button[type=submit]').contains('Daftar').click();  
    cy.get('.sweet-alert button.confirm').focus().click();
    /* ==== End Cypress Studio ==== */
  });
})
