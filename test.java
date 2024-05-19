interface Ticket {
    public void getDetails();
}

public class EconomyTicket implements Ticket {
    @Override
    public void getDetails() {
        System.out.println("Economy Class Ticket: Basic amenities and seating.");
    }
}

public class BusinessTicket implements Ticket {
    @Override
    public void getDetails() {
        System.out.println("Business Class Ticket: Extra legroom, meals, and priority boarding.");
    }
}

public class FirstClassTicket implements Ticket {
    @Override
    public void getDetails() {
        System.out.println("First Class Ticket: Luxurious seating, gourmet meals, and exclusive services.");
    }
}

public class PremiumEconomyTicket implements Ticket {
    private String userUUID;
    public PremiumEconomyTicket(String userUUID) {
        this.userUUID = userUUID;
    }

    @Override
    public void getDetails() {
        System.out.println("Premium Economy Class Ticket: More legroom and enhanced services.");
    }
}


class TicketService {
    private Ticket ticket;

    public TicketService(Ticket Ticket) {
        this.ticket = ticket;
    }

    public void showDetails() {
        ticket.getDetails();
    }
}


class Main {
    public static void main(String[] args) {
        TicketService economyTicketService = new TicketService(new EconomyTicket());
        economyTicketService.showDetails();

        TicketService businessTicketService = new TicketService(new BusinessTicket());
        businessTicketService.showDetails();

        TicketService firstClassTicketService = new TicketService(new FirstClassTicket());
        firstClassTicketService.showDetails();

        TicketService premiumEconomyTicketService = new TicketService(new PremiumEconomyTicket("5b94f718-ae1a-4f18-947e-f9ba40d13866"));
        premiumEconomyTicketService.showDetails();
    }
}

abstract class TicketFactory {
    abstract Ticket createTicket();
}

class EconomyTicketFactory extends TicketFactory {
    Ticket createTicket() {
        return new EconomyTicket();
    }
}

class BusinessTicketFactory extends TicketFactory {
    Ticket createTicket() {
        return new BusinessTicket();
    }
}

class FirstClassFactory extends TicketFactory {
    Ticket createTicket() {
        return new FirstClassTicket();
    }
}

class PremiumEconomyFactory extends TicketFactory {
    String userUUID;

    public PremiumEconomyFactory(String userUUID) {
        this.userUUID = userUUID;
    }

    Ticket createTicket() {
        return new PremiumEconomyTicket(this.userUUID);
    }
}

class Main {
    public static void main(String[] args) {
        TicketFactory economyTicketFactory = new EconomyTicketFactory();
        Ticket economyTicket = economyTicketFactory.createTicket();
        economyTicket.getDetails();

        TicketFactory businessTicketFactory = new BusinessTicketFactory();
        Ticket businessTicket = businessTicketFactory.createTicket();
        businessTicket.getDetails();
        
        TicketFactory firstClassTicketFactory = new FirstClassTicketFactory();
        Ticket firstClassTicket = firstClassTicketFactory.createTicket();
        firstClassTicket.getDetails();
    }
}